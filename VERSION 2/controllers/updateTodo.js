// so basically we need to create a todo object and need to insert it into database so we require the schema right how does the data look
const Todo = require("../models/todo");

//defining route handler
//so we are basically making them async so that no one waits for these fuctions as they are asynchronous
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
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
