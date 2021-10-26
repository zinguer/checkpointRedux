import React from 'react'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div className ='theapp'>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App
