import { Sequelize } from "sequelize";

const db = new Sequelize({
  username: "root",
  password: "root",
  database: "todo_express",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
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
    console.log(err);
  }
};

export { connect };
