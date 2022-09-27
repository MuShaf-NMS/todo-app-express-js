import app from "./app/index.js";
import { connect } from "./app/db";

const port = 8000;

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
