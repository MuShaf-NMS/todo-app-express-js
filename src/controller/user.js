import User from "../db/model/user.js";
import Auth from "../db/model/auth.js";

const UserController = {
  register: async (req, res) => {
    const { username, password, name, gender, address } = req.body;
    const user = await User.create({
      name: name,
      gender: gender,
      address: address,
    });
    const auth = await Auth.create({
      username: username,
      password: password,
    });
    user.setAuth(auth);
    return res.json({ msg: "Register Success" });
  },
  getAll: async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
  },
};

export default UserController;
