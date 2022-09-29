import jwt from "jsonwebtoken";
import User from "../db/model/user.js";
import redis from "../db/redis.js";

const AuthMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.sendStatus(401);
  }
  const splitted = authorization.split(" ");
  if (splitted.length != 2 || splitted[0] != "Bearer") {
    return res.sendStatus(401);
  }
  const token = splitted[1];
  if (!token) {
    return res.sendStatus(401);
  }
  const claim = jwt.verify(token, process.env["SECRET_KEY"]);
  const now = Date.now();
  if (!claim || claim.exp * 1000 < now) {
    return res.sendStatus(401);
  }
  if (
    !(await User.findOne({ where: { uuid: claim.userID } })) ||
    !(await redis.get(claim.jti))
  ) {
    return res.sendStatus(401);
  }
  req.app.set("userID", claim.userID);
  req.app.set("jti", claim.jti);
  next();
};

export default AuthMiddleware;
