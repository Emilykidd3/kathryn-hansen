const { Admin } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleAdmin({ admin = null, params }, res) {
    const foundAdmin = await Admin.findOne({
      $or: [{ _id: admin ? admin._id : params.id }, { email: params.email }],
    });

    if (!foundAdmin) {
      return res
        .status(400)
        .json({ message: "Cannot find a admin with this id!" });
    }

    res.json(foundAdmin);
  },
  async createAdmin({ body }, res) {
    const admin = await Admin.create(body);

    if (!admin) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(admin);
    res.json({ token, admin });
  },
  async login({ body }, res) {
    const admin = await Admin.findOne({
      $or: [{ email: body.email }],
    });
    if (!admin) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await admin.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(admin);
    res.json({ token, admin });
  },
};
