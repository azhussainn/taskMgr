import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Notification from '../Notifications/Notification.component'

import {
    TodoItemContainer,
    ChildContainer,
    Title,
    Text,
    Label,
    Select,
    Option,
    RemoveItem

} from './todos.styles'


const TodoContainer = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {

        const getAllTodos = () => {

            axios.get('http://localhost:4000/api/allTasks')
                .then(res => setTodos(res.data))
                .catch(err => console.log(err))
            }
            getAllTodos()

    }, [])

    const updateTasks = newTodo =>{
        const updatedTodos = todos.map(todo => {
            if(todo._id !== newTodo._id){
                return todo
            }
            return newTodo
        })
        setTodos(updatedTodos)
    }

    const removeTask = newTodo => {
        const updatedTodos = todos.filter(todo => {
            return todo._id !== newTodo._id
        })
        setTodos(updatedTodos)

    }

    const dateTimeFormat = (date) => {
        const newDate = date.slice(0, 10)
        const time = date.slice(11, 16)
        const newDateTime = newDate + " " + time

        return newDateTime
    }
    const handleChange = (e, id) => {
        const { name, value } = e.target
        let url
        let data
        if(name === 'priority'){
            url = 'http://localhost:4000/api/changePriority'
            data = {
                id,
                priority : value
            }
        }else{
            url = 'http://localhost:4000/api/changeTaskStatus'
            data = {
                id,
                taskStatus : value
            }
        }
        axios.post(url, data)
        .then(res => updateTasks(res.data))
        .catch(err =>  console.log(err))
    }

    const handleClick = (todo) => {
        axios.post(`http://localhost:4000/api/deleteTask`, {id : todo._id})
        .then(res => {
            Notification("success-remove", "success")
            removeTask(res.data)
        })
        .catch(err => Notification("error-remove", "danger"))
    }

    return(
    <div>
        <ReactNotification />
        {
            todos.length ? 
            todos.map(todo => (
                <TodoItemContainer key={todo._id}
                    className={todo.taskStatus === "Done" &&
                    "completedTask"
                }
                >
                    <Title>{todo.name}</Title>
                    <ChildContainer>
                        <Text>Priority : {todo.priority}</Text>
                        <Text>Task Status : {todo.taskStatus}</Text>
                    </ChildContainer>

                    <Text>Created At : {dateTimeFormat(todo.createdAt)} </Text>
                    <Text>Due Date  &nbsp; : {dateTimeFormat(todo.dueDate)}</Text>


                    <Label>Change Priority</Label>
                    <Select
                        value={todo.priority}
                        onChange={(e) => handleChange(e, todo._id)}
                        name="priority"
                    >
                        <Option disabled></Option>
                        <Option value="Max">Max</Option>
                        <Option value="Normal">Normal</Option>
                        <Option value="Low">Low</Option>
                    </Select>

                    <Label>Change Task Status</Label>
                    <Select
                        value={todo.taskStatus}
                        onChange={(e) => handleChange(e, todo._id)}
                        name="taskStatus"
                    >
                        <Option disabled></Option>
                        <Option value="Review">Review</Option>
                        <Option value="On-going" >OnGoing</Option>
                        <Option value="Done">Done</Option>
                    </Select>
                    <RemoveItem
                        onClick={() => handleClick(todo)}
                    >
                        Delete Task
                    </RemoveItem>
                </TodoItemContainer>
            )) :
            <h1>No Tasks Found</h1>
        }
    </div>

)}

export default TodoContainer