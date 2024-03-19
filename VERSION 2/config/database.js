const mongoose = require("mongoose");
require("dotenv").config(); // loads .env contents in process object
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB KA CONNECTION IS SUCCESSFUL");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    }); //IT WILL BE PRESENT IN THE PROCESS OBJECT BROTHER FOR WHICH SHOULD BE INSTALLED NPM I DOTENV
};

module.exports = dbConnect; //exporting the function dbconnect (modules.exports is export in backend ,equavalent to export in react )
