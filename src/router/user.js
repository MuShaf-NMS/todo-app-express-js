import { Router } from "express";
import UserController from "../controller/user.js";

const UserRouter = Router();
UserRouter.route("/user")
  .get(UserController.getAll)
  .post(UserController.register);

export default UserRouter;
