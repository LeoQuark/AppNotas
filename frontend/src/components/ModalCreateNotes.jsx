import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCreateNotes = (props) => {
    
    const values = props.values

  return (
    <React.Fragment>
      <Modal show={values.show} onHide={values.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={values.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={values.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalCreateNotes;
