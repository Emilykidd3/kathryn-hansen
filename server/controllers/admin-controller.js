// const { User } = require("../models");
// const { signToken } = require("../utils/auth");

// module.exports = {
//   async getSingleAdmin({ user = null, params }, res) {
//     const foundAdmin = await Admin.findOne({
//       $or: [{ _id: admin ? admin._id : params.id }, { email: params.email }],
//     });

//     if (!foundAdmin) {
//       return res
//         .status(400)
//         .json({ message: "Cannot find a admin with this id!" });
//     }

//     res.json(foundAdmin);
//   },
//   async createAdmin({ body }, res) {
//     const admin = await Admin.create(body);

//     if (!admin) {
//       return res.status(400).json({ message: "Something is wrong!" });
//     }
//     const token = signToken(admin);
//     res.json({ token, admin });
//   },
//   async login({ body }, res) {
//     const admin = await Admin.findOne({
//       $or: [{ email: body.email }],
//     });
//     if (!admin) {
//       return res.status(400).json({ message: "Can't find this user" });
//     }

//     const correctPw = await admin.isCorrectPassword(body.password);

//     if (!correctPw) {
//       return res.status(400).json({ message: "Wrong password!" });
//     }
//     const token = signToken(admin);
//     res.json({ token, admin });
//   },
//   //   async saveBook({ user, body }, res) {
//   //     console.log(user);
//   //     try {
//   //       const updatedUser = await User.findOneAndUpdate(
//   //         { _id: user._id },
//   //         { $addToSet: { savedBooks: body } },
//   //         { new: true, runValidators: true }
//   //       );
//   //       return res.json(updatedUser);
//   //     } catch (err) {
//   //       console.log(err);
//   //       return res.status(400).json(err);
//   //     }
//   //   },
//   //   // remove a book from `savedBooks`
//   //   async deleteBook({ user, params }, res) {
//   //     const updatedUser = await User.findOneAndUpdate(
//   //       { _id: user._id },
//   //       { $pull: { savedBooks: { bookId: params.bookId } } },
//   //       { new: true }
//   //     );
//   //     return res.json(updatedUser);
//   //   },
// };
