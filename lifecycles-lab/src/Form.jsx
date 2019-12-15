import React, { Component } from 'react'

class Form extends Component {


    render() {
        let {submitTodo, currentTodo, handleInput} = this.props

        return (
            <form onSubmit={submitTodo}>
                <input 
                    type="text"
                    placeholder="Enter your todo here"
                    value={currentTodo}
                    onChange={handleInput}
                    required
                />
            </form>
        )
    }
}

export default Form