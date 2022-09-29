import { Router } from "express";
import TodoController from "../controller/todo.js";

const TodoRouter = Router();

TodoRouter.route("/todo").get(TodoController.getAll).post(TodoController.add);
TodoRouter.route("/todo/:todoID")
  .get(TodoController.getOne)
  .put(TodoController.update)
  .delete(TodoController.delete);

export default TodoRouter;
