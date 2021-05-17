const router = require("express").Router();
const {
  createAdmin,
  getSingleAdmin,
  login,
} = require("../../controllers/admin-controller");

const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createAdmin);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleAdmin);

module.exports = router;
