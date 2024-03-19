// importing express => require is basically import in backend
const express = require("express");
//creating expressjs instance as app
const app = express();
//listening the app(server) at port no 3000 you can use any number (basically runnning the server at port no 3000 and call back function returns a message)

//using body parser for fetching data from body of post request
const bodyParser = require("body-parser");
//specifically parse json data and add it to the request body
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Server started at port no 3000");
});
//for checking server is listened  run node server.js

//TILL HERE SERVER IS CREATED

//creating first route
//(path,(request,response)) request came so we need to send the response right
//this means that when even you come to the home page please send a get request which in return send a response
app.get("/", (req, res) => {
  //GET REQUEST
  res.send("HELLO JEE");
});

//here the post request only contains the data which shoudld be submitted to the database
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body; //fetching data from request body;
  console.log(name, brand);
  res.send("CAR SUBMITTED SUCCESSFULLY");
});
//POST REQUEST CANNOT BE SEEN IN THIS MANNER

//NOW CONNECTING EXPRESS SERVER WITH MONGO DB DATABASE
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/PUMA", {
    //These satements are must which requires no knowledge use type antey this whole thing is a promise then use .then
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO DB CONNECTION SUCCESSFUL");
  })
  .catch((error) => {
    console.log("RECEIVED AN ERROR");
  });
//IF IAM NOT HAVING A DATABASE WHICH IS CREATED THEN THIS STATEMENT WILL CREATED THE DB ON ITS OWN
