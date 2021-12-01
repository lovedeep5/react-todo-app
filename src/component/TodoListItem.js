import React from 'react'
import './css/TodoListItem.css'

export default function TodoListItem({ todos, setTodos }) {
    const deleteItemHandler = (itemId) => {
        setTodos(todos.filter( todo => todo.id !== itemId))
    }
    const completeItemHandler = (itemId) => {
        setTodos(todos.map(todo => {
            if (todo.id === itemId) {
                return {
                    ...todo, isComplete : !todo.isComplete
                }
            }
            return todo;
        }))
    }
    return (
        <>
            {todos.map(todo => {
                return (
                    <li className={`list-item d-flex justify-content-between py-1 ${todo.isComplete ? "completed-item" : "incompleted-item"}`} key={ todo.id}>
                        <span className='todo-list-item-text'>{ todo.text}</span>
                                    <span className="todo-list-item-controls">
                                        <span className="input-group">
                                <button className='btn btn-success' onClick={() => { completeItemHandler(todo.id) }}><i class="fas fa-check"></i>   </button>
                                <button className='btn btn-danger' onClick={ () => { deleteItemHandler(todo.id) }}><i class="fas fa-trash"></i></button>
                                        </span>
                                    </span>
                                </li>  
                )
            })}
          
        </>
    )
}
