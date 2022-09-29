import { DataTypes, UUIDV4 } from "sequelize";
import db from "../index.js";

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
