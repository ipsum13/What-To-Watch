const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
const connectDB = async () => {
  await mongoose
  .connect(process.env.MONGO_URI, {
    promiseLibrary: require("bluebird"), useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));
}

module.exports = connectDB;

