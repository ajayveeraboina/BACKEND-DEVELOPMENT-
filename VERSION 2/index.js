const express = require("express");
const app = express();

//loads .env contents in process object
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body basically PARSER
app.use(express.json());

//IMPORTING  ROUTES FOR TODO API
const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes); //nothing the api address can be made acc to our easy first /api/v1 comest then the route comes

app.listen(PORT, () => {
  console.log(`Server started Successfully at ${PORT}`);
});

//connecting to datbase
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send("<h1>This is home page</h1>");
});
