import app from "./app/index";
import { connect } from "./app/db";

console.log(7, process.env.APP_PORT);

const port = process.env.APP_PORT ?? 8000;

// run server on specified port
app.listen(port, async () => {
  try {
    await connect();
    console.log(
      `Development server is running on:\n * http://localhost:${port}`
    );
  } catch (err) {
    console.log(err);
  }
});
