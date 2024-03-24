const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Ibrahim-Ahmed-21:qweasd1238@cluster0.hntmjlm.mongodb.net/unitttesting?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Db Connection Successful!!"))
  .catch((err) => console.log(err));
