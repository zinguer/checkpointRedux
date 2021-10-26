import React from 'react'
import { connect } from 'react-redux'
import { Card , Button} from 'react-bootstrap'
import { deletetodo, togglecomplelte } from "../redux/action/actionType";
import EditTodo from './EditTodo'

const TodoCard = ({ todo, deletetodo, togglecomplelte }) => {
  return (
    <div>
      <Card
        bg="dark"
        text="white"
        border={todo.isComplete ?"success": 'warning'}
        style={{ width: "100%", margin: "2%" }}
      >
        <Card.Body>
          <Card.Title style={{ display: "flex", justifyContent: "center" }}>
            {todo.text}
          </Card.Title>
          <div style={{ display: "flex", justifyContent: "space-around" , marginTop : '2%'}}>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deletetodo(todo.id)}
            >
              Delete
            </Button>
            <EditTodo todo={todo} />
            <Button
              size="sm"
              onClick={() => togglecomplelte(todo.id)}
              variant={todo.isComplete ? "success" : "warning"}
            >
              {todo.isComplete ? "done !" : "do it !"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect(null, { deletetodo, togglecomplelte })(TodoCard);
