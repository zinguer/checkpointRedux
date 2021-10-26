import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import TodoCard from './TodoCard'

const TodoList = () => {
    const todo = useSelector(state => state.todo)
    return (
    
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            allignContent : 'center'
          }}
        >
            <Container>
          {todo.map((el) => (
            <TodoCard todo={el} />
          ))}
          </Container>
        </div>
    
    );
}

export default TodoList
