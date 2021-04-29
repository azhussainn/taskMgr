import React, {useState} from 'react';
import axios from 'axios'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Notification from '../Notifications/Notification.component'
import {
    AddTaskContainer,
    Form,
    TextArea,
    Label,
    Select,
    Input

} from './addTask.styles'

const AddTask = () => {

    const [name, setName] = useState("")
    const [priority, setPriority] = useState("")
    const [futureDate, setFutureDate] = useState("")


   const handleSubmit = (e) =>{
       e.preventDefault()
       const createdAt = new Date(Date.now())
       const dueDate = new Date(futureDate)
       const taskStatus = 'Review'
       const newTask = {
           name,
           priority,
           dueDate,
           createdAt,
           taskStatus
       }
       axios.post(
        'http://localhost:4000/api/addTask',
        newTask
    ).then(res => Notification('success-add', "success"))
    .catch(err => Notification('error-add', 'danger'))

    setName("")
    setPriority("")
    setFutureDate("")

   }

    return(
    <AddTaskContainer>
        <ReactNotification />

        <Form onSubmit={handleSubmit}>
            <TextArea
                type='text'
                name='name'
                value={name}
                rows={5}
                placeholder="Task Details"
                onChange={(e) => setName(e.target.value)}
                required
            ></TextArea>

            <Label>Priority</Label>
            <Select value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
            >
                <option disabled></option>
                <option value="Max">Max</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
            </Select>

            <Label>Due Date</Label>
            <Input
                type="datetime-local"
                value={futureDate}
                onChange={(e) => setFutureDate(e.target.value)}
                required
            />

            <Input
                type='submit'
                value="Add Task"
            />
        </Form>

    </AddTaskContainer>
)}

export default AddTask