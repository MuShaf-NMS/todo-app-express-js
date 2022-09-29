import { DataTypes, UUIDV4 } from "sequelize";
import db from "../index.js";

const Todo = db.define(
  "Todo",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.SMALLINT,
      defaultValue: 0, // 0 for not started, 1 for on going & 2 for finished. default 0
    },
    finishedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
  }
);

export default Todo;
