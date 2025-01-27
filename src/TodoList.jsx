'use client'

import { useState } from 'react'
import './todolist.css'
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Style with CSS", completed: false }
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo("")
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
       
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <span className="plus-icon">+</span>
          Add
        </button>
       
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
            </label>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
