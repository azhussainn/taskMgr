const express = require('express')
const router = express.Router()
const Todos = require('../models/todoModel')


router.post('/addTask', async (req, res) => {

    const {name, priority, createdAt, dueDate, taskStatus} = req.body
    const newTask = new Todos({
        name,
        priority,
        createdAt,
        dueDate,
        taskStatus
    })
    newTask.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
    return
})

router.get('/allTasks', async(req, res) => {
    Todos.find({}).sort({'createdAt' : -1}).exec( (err, todos) => {
        if(!err){
            res.json(todos)
        }else{
            throw err
        }

    })
})

router.post("/changePriority", async(req, res) => {
    const {id, priority} = req.body

    Todos.findByIdAndUpdate(id, {priority}, {new: true},  (err, docs) => {
        if(err){
            console.log(err)
            return
        }else{
            res.json(docs)
        }
    })
})

router.post("/changeTaskStatus", async(req, res) => {
    const {id, taskStatus} = req.body

    Todos.findByIdAndUpdate(id, {taskStatus}, 
        {new : true}, (err, docs) => {
        if(err){
            console.log(err)
            return
        }else{
            res.json(docs)
        }
    } )
})

router.post("/deleteTask", async(req, res) => {
    const {id} = req.body

    Todos.findByIdAndDelete(id, (err, docs) => {
        if(err){
            console.log(err)
            return
        }else{
            res.json(docs)
        }
    })
} )


module.exports = router