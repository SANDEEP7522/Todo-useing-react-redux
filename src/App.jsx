import { useState } from 'react'

import './App.css'
import TodoInput from './compnentss/todoInput';
import { useSelector } from 'react-redux'
import TodoList from './compnentss/todoList';

function App() {
  const todos = useSelector(state => state.todoState.todos);

  return (
    <>
     <div>Todo-App-Redux</div>
     <TodoInput />
     <TodoList todos={todos} />
    </>
  
  )
}

export default App
