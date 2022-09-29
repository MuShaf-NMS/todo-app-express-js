import { DataTypes, UUIDV4 } from "sequelize";
import db from "../index.js";
import Auth from "./auth.js";
import Todo from "./todo.js";

const User = db.define("User", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.CHAR(1),
  },
  address: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

User.hasOne(Auth, { sourceKey: "uuid", foreignKey: "userID" });
// User.hasMany(Todo, { sourceKey: "uuid", foreignKey: "userID" });
// Todo.belongsTo(User, { foreignKey: "userID" });

export default User;
