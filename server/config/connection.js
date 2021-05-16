const mongoose = require("mongoose");
var cloudinary = require("cloudinary");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kathryn-hansen",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

cloudinary.config({
  cloud_name: "dej8kpmbw",
  api_key: "279398537595666",
  api_secret: "V3IiCtzagihOl8lbX4zFAX1FaT8",
});

module.exports = mongoose.connection;
