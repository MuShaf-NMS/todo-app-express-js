import app from "./app/index.js";

const port = 8000;

// run server on specified port
app.listen(port, () => {
  console.log(`Development server is running on:\n * http://localhost:${port}`);
});
