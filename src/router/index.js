import { Router } from "express";
import UserRouter from "./user.js";

const router = Router();

router.use(UserRouter);

export default router;
