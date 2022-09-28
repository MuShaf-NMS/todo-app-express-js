import { DataTypes, UUIDV4 } from "sequelize";
import db from "../index.js";
import Auth from "./auth.js";
console.log("User");
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
});

User.hasOne(Auth, { sourceKey: "uuid", foreignKey: "userID" });

export default User;