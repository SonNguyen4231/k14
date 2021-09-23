const mongoose = require("./dbConnect");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    age: Number,
    role: String,
    class: { type: String, ref: "class" },
  },
  { collection: "user" }
);

// UserSchema.index({ username: "text" }, { unique: true });

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

UserModel.create({
    username: 'son4231',
    password: '123123',
    age: 19,
    role: 'user',
})
.then(data => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
})
