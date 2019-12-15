import React, { Component } from 'react'
import Todo from './Todo'

class List extends Component {  
    render() {
        let {
            todos,
            handleDelete,
        } = this.props

        let list = []
        for (let key in todos) {
            if (todos[key]) {
                list.push(
                    <Todo   
                        todo={todos[key]}
                        value={key}
                    />
                )
            }
        }

        return (
            <ul onClick={handleDelete}>
                {list}
            </ul>
        )
    }
}

export default List