import mongoose from "mongoose";

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  text: String,
  isDone: Boolean
});

const Todo = model('Todo', todoSchema);

export default Todo;