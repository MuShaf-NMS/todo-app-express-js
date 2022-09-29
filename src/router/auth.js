import { Router } from "express";
import AuthController from "../controller/auth.js";
import AuthMiddleware from "../middleware/auth.js";

const AuthRouter = Router();

AuthRouter.post("/register", AuthController.register)
  .post("/login", AuthController.login)
  .get("/logout", AuthMiddleware, AuthController.logout);

export default AuthRouter;
