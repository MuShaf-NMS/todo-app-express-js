import { DataTypes } from "sequelize";
import db from "../db";

const User = db.define("User", {
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

export default User;
