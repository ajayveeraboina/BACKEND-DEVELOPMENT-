// so basically we need to create a todo object and need to insert it into database so we require the schema right how does the data look
const Todo = require("../models/todo");

//defining route handler
//so we are basically making them async so that no one waits for these fuctions as they are asynchronous
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body;
    //i got the request so i need to response for that request right which is creating and  submitting in DB
    const response = await Todo.create({ title, description }); // inserting the Todo object into database
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry is Successfull in database",
    });
  } catch {
    (err) => {
      console.error(err);
      console.log(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: error.message,
      });
    };
  }
};
