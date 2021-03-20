import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCreateNotes = (props) => {
  const values = props.values;

  return (
    <React.Fragment>
      <Modal show={values.show} onHide={values.handleClose} className="borde">
        <div className="d-flex justify-content-between bg-violeta-claro py-2 px-2">
          <h4 className="d-flex text-capitalize text-white mx-3">
            Añade una nota
          </h4>
          <button
            className="btn bg-white shadow-sm"
            onClick={values.handleClose}
          >
            <i class="fas fa-times text-violeta-claro"></i>
          </button>
        </div>
        <Modal.Body>
          <form action="" method="POST">
            <div className="row">
              <div className="col-6 form-group">
                <label htmlFor="" className="">
                  Título
                </label>
                <input
                  type="text"
                  name="titulo"
                  className="form-control form-control-sm"
                  placeholder="Agrega un título"
                />
              </div>
              <div className="col-6 form-group">
                <p className="text-base">Tipo de nota</p>
                <select name="tipoDeNota" id="tipoDeNota" className="form-select form-select-sm ">
                  <option selected>Selecciona el tipo de nota</option>
                  <option value="projects">
                      Projects
                  </option>
                  <option value="business"></option>
                  <option value="Personal"></option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
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
