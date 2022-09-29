import User from "../db/model/user.js";
import Auth from "../db/model/auth.js";

const UserController = {
  getAll: async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
  },
};

export default UserController;
