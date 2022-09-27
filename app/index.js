import express, { json } from "express";
import router from "./router";

const app = express(); // init app

app.use(json());

app.get("/", (req, res) => {
  return res.json({
    name: "express-js",
    version: "1.0.0",
    description: "express js App",
    repository: "github.com/MuShaf-NMS/todo-app-express-js.git",
    author: "MuShaf-NMS",
    license: "MIT",
    private: false,
  });
});

app.use(router);

export default app;
