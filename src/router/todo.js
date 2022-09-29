import { Router } from "express";
import TodoController from "../controller/todo.js";
import AuthMiddleware from "../middleware/auth.js";

const TodoRouter = Router();

TodoRouter.route("/todo")
  .get(AuthMiddleware, TodoController.getAll)
  .post(TodoController.add);
TodoRouter.route("/todo/:todoID")
  .get(TodoController.getOne)
  .put(TodoController.update)
  .delete(TodoController.delete);

export default TodoRouter;
