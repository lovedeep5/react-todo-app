import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList({ todos, setTodos}) {
    return (
        <div className="todo-list-wrapper">
            <div className="todo-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <ul className="list-unstyled">
                                <TodoListItem todos={todos} setTodos={ setTodos}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
