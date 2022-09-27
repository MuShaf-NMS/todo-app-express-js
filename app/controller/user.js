import User from "../model/user";

const UserController = {
  register: async (req, res) => {
    const { name, gender, address } = req.body;
    await User.create({
      name: name,
      gender: gender,
      address: address,
    });
    return res.json({ msg: "Register Success" });
  },
  getAll: async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
  },
};

export default UserController;
