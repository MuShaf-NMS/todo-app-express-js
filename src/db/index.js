import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize({
  username: process.env.DB_USER ?? "DB_USER",
  password: process.env.DB_PASS ?? "DB_PASS",
  database: process.env.DB_NAME ?? "DB_NAME",
  host: process.env.DB_HOST ?? "DB_HOST",
  port: process.env.DB_PORT ?? "DB_PORT",
  dialect: process.env.DIALECT ?? "DIALECT",
  logging: false,
});

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

export default db;
