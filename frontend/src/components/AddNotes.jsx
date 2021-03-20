import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalCreateNotes from "./ModalCreateNotes";

const AddNotes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <button
        className="d-flex align-items-center btnAddNotes"
        onClick={handleShow}
      >
        <i className="fas fa-plus mx-3 mt-1"></i>
        Agrega notas
      </button>
      <ModalCreateNotes values={{
        show,
        handleClose,
        handleShow
      }}/>
      
    </React.Fragment>
  );
};

export default AddNotes;
