const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://thiendao4231:son321@cluster0.nmd17.mongodb.net/K14?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose;
