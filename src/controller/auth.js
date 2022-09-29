import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import Auth from "../db/model/auth.js";
import User from "../db/model/user.js";
import redis from "../db/redis.js";

const AuthController = {
  register: async (req, res) => {
    try {
      const { username, password, name, gender, address, email } = req.body;
      const user = await User.create({
        name: name,
        gender: gender,
        address: address,
        email: email,
      });
      const hashpass = await bcrypt.hash(password, await bcrypt.genSalt());
      const auth = await Auth.create({
        username: username,
        password: hashpass,
      });
      user.setAuth(auth);
      return res.json({ msg: "Register Success" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const auth = await Auth.findOne({ where: { username: username } });
      if (!auth || !(await bcrypt.compare(password, auth.password))) {
        return res.status(403).json({ msg: "Username or Password wrong" });
      }
      const jti = v4();
      const token = jwt.sign(
        {
          userID: auth.userID,
        },
        process.env["SECRET_KEY"],
        { jwtid: jti, expiresIn: "3h" }
      );
      redis.setEx(jti, 3 * 60 * 60 * 60, token);
      return res.json({ token: token });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
  logout: async (req, res) => {
    try {
      await redis.del(req.app.get("jti"));
      return res.json({ msg: "Logout success" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
};

export default AuthController;
