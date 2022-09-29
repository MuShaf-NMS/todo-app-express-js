import { Router } from "express";
import TodoRouter from "./todo.js";
import UserRouter from "./user.js";

const router = Router();

router.use(UserRouter);
router.use(TodoRouter);

export default router;
