import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize({
  username: process.env.DB_USER ?? "root",
  password: process.env.DB_PASS ?? "root",
  database: process.env.DB_NAME ?? "todo_express",
  host: process.env.DB_HOST ?? "localhost",
  port: process.env.DB_PORT ?? 3306,
  dialect: process.env.DIALECT ?? "mysql",
  logging: false,
});

export default db;

const connect = async () => {
  console.info("Connecting to database ...");
  try {
    await db.authenticate();
    await db.sync({ alter: true });
    console.info("Database connection established");
  } catch (err) {
    throw err;
  }
};

export { connect };
