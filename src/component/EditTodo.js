import React ,{useState} from 'react'
import { connect } from 'react-redux';
import {edittodo} from '../redux/action/actionType'
import { Modal, Button, FormControl } from "react-bootstrap";

const EditTodo = ({todo , edittodo}) => {
  const [show, setShow] = useState(false);

  const [text , setText] = useState(todo.text) ;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    const editedtodo = {
      ...todo , text : text 
    }
     edittodo(editedtodo)
     setShow(false)
  }

  return (
    <>
      <Button size="sm" variant="light" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className = 'modalHeader'>
          <Modal.Title>Edit to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect (null , {edittodo} )(EditTodo)
