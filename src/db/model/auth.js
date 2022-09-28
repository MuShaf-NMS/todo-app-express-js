import { DataTypes, UUIDV4 } from "sequelize";
import db from "../index.js";
console.log("Auth");
const Auth = db.define("Auth", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default Auth;
