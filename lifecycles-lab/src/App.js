import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import List from './List';
import Form from './Form';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: {},
            count: 0,
            currentTodo: '',
        }
    }


    submitTodo = (event) => {
        event.preventDefault()
        let {
            state: {
                currentTodo,
                todos,
                count,
            },
        } = this


        if (!currentTodo || !currentTodo.split(' ').join('')) return
        todos[count] = currentTodo
        this.setState({
            todos: todos,
            currentTodo: '',
            count: count + 1
        })
    }


    handleInput = ({target: {value}}) => {
        this.setState({
            currentTodo: value
        })
    }


    handleDelete = ({target: {tagName, value}}) => {
        console.log(tagName, value)
        if (tagName === "BUTTON") {
            let {todos} = this.state
            todos[value] = undefined
            this.setState({
                todos: todos,
            })
        }
    }


    render() {
        let {
            state: {
                todos, 
                currentTodo,
            },
            submitTodo,
            handleInput,
            handleDelete,
        } = this

        return (
            <div className="App">
                <h1>TODOS</h1>
                <ToastContainer />
                <Form 
                    submitTodo={submitTodo} 
                    currentTodo={currentTodo} 
                    handleInput={handleInput} 
                />
                <List
                    todos={todos} 
                    handleDelete={handleDelete} 
                />
            </div>
        );
    }
}

export default App;
