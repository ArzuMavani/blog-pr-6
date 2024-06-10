const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://arzumavani1:12345@cluster0.okmiinp.mongodb.net/blog"
  );
  console.log("Data base is connected");
};

module.exports = db;
