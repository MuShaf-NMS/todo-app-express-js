import { Router } from "express";
import AuthRouter from "./auth.js";
import TodoRouter from "./todo.js";
import UserRouter from "./user.js";

const router = Router();

router.use(UserRouter);
router.use(AuthRouter);
router.use(TodoRouter);

export default router;
