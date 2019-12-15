import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Todo extends Component {
    componentWillMount = () => toast.success(`Adding new todo: ${this.props.todo}`)

    componentWillUnmount = () => toast.error(`Deleting todo: ${this.props.todo}`)

    render() {
        let {todo, value} = this.props

        return (
            <li key={value}>{todo}<button value={value}>x</button></li>
        )
    }
}

export default Todo