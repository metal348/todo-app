const express = require("express");
const { todo } = require("./db");
const { createTodo,updateTodo } = require("./types");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    res.json(todos);
})

 app.post("/todos",async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Sent wrong inputs"
        });
    }
    // put in mongo
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed: false
    })
    res.json({msg: "todo created"})
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Sent wrong inputs"
        });
    }
    await todo.updateMany({
        _id: req.body.id
    },{completed: true})
})

app.listen(3030);