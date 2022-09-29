import Todo from "../db/model/todo.js";

const TodoController = {
  add: async (req, res) => {
    const { title, description } = req.body;
    try {
      await Todo.create({
        title: title,
        description: description,
      });
      return res.json({ msg: "Success to add todo" });
    } catch (err) {
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
  getAll: async (req, res) => {
    const todos = await Todo.findAll();
    return res.json(todos);
  },
  getOne: async (req, res) => {
    const todo = await Todo.findOne({ where: { uuid: req.params.todoID } });
    return res.json(todo);
  },
  update: async (req, res) => {
    const { title, description, status } = req.body;
    try {
      await Todo.update(
        {
          title: title,
          description: description,
          status: status,
          finishedAt: status == 2 ? new Date() : null,
        },
        { where: { uuid: req.params.todoID } }
      );
      return res.json({ msg: "Success to update todo" });
    } catch (err) {
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      await Todo.destroy({ where: { uuid: req.params.todoID } });
      return res.json({ msg: "Success to delete todo" });
    } catch (err) {
      return res.status(400).json({ msg: "Something's wrong" });
    }
  },
};

export default TodoController;
