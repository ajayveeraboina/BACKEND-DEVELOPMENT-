const express = require("express");
const router = express.Router();

//importing controller so that it can be mapped with the route
const { createTodo } = require("../controllers/createTodo");

//define API ROUTES
router.post("/createTodo", createTodo);

module.exports = router;
