import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../redux/action/actionType'
import { FormControl , Container , Button, InputGroup} from 'react-bootstrap';
const AddTodo = ({ addtodo }) => {
  const [text, setText] = useState("");

  const handleSave = () => {
      const newtodo = {
          text : text ,
          id : Math.random(),
          isComplete : false 
      }
      addtodo(newtodo)
      setText('')
  }

  return (
    <div>
      <Container>
        <InputGroup style={{ padding: "2%" }}>
          <FormControl
            type="text"
            placeholder="add todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <Button onClick={handleSave} variant="dark">
            Add
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
};

export default connect(null , {addtodo}) (AddTodo)
