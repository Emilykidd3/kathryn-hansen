const router = require("express").Router();
const userRoutes = require("./admin-routes");

router.use("/admin", userRoutes);

module.exports = router;
