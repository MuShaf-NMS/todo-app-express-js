import express, { json } from "express";
import db, { connect } from "./db/index.js";
import router from "./router/index.js";

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

const port = process.env.APP_PORT ?? 8000;

// run server on specified port
app.listen(port, async () => {
  try {
    await connect();
    console.log(
      `Development server is running on:\n * http://localhost:${port}`
    );
  } catch (err) {
    console.log("-----------------");
    console.log(err);
  }
});
