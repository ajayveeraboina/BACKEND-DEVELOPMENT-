// so basically we need to create a todo object and need to insert it into database so we require the schema right how does the data look
const Todo = require("../models/todo");

//defining route handler
//so we are basically making them async so that no one waits for these fuctions as they are asynchronous
exports.getTodo = async (req, res) => {
  try {
    //fetch ahh todo items for database
    const todos = await Todo.find({});
    //response
    res.status(200).json({
      success: true,
      data: todos,
      messager: "Entire Todo Data is fetched",
    });
  } catch (err) {
    {
      console.error(err);
      console.log(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: error.message,
      });
    }
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items basis on it
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    //data not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "NO DATA FOUND",
      });
    }
    //data found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
