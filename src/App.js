import React from 'react'
import './App.css'
import TodoList from './componant/TodoList'

export default function App() {
  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <TodoList/>
    </div>
  )
}
