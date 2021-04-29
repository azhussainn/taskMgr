import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AddTask from './components/addTask/addTask.component'
import TodoContainer from './components/todos/todos.component'
import Header from './components/header/Header.component'

const App = () => (
    <div>
        <Header username="User"/>
        <Switch>
            <Route exact path='/'>
                <TodoContainer />
            </Route>
            <Route path='/addTask'>
                <AddTask />
            </Route>
        </Switch>
    </div>
)

export default App