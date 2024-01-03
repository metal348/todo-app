const mongoose = require("mongoose")
const { string } = require("zod")
/*mongodb+srv://metal348:malav123@cluster0.7oaobm8.mongodb.net/todos*/
mongoose.connect("mongodb+srv://metal348:malav123@cluster0.7oaobm8.mongodb.net/todos") 
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {todo}