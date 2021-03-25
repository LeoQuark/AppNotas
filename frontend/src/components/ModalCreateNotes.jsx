import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalCreateNotes = (props) => {
  const values = props.values;

  return (
    <React.Fragment>
      <Modal show={values.show} onHide={values.handleClose} className="borde">
        <div className="d-flex justify-content-between bg-violeta-claro py-2 px-2">
          <h4 className="d-flex text-capitalize text-white mx-3">
            Agrega una nota
          </h4>
          <button
            className="btn btn-sm bg-white shadow-sm h-25"
            onClick={values.handleClose}
          >
            <i className="fas fa-times text-violeta-claro"></i>
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
                <label className="text-base">Tipo de nota</label>
                <select
                  name="tipoDeNota"
                  id="tipoDeNota"
                  className="form-select form-select-sm selectOption"
                >
                  <option selected>Selecciona el tipo de nota</option>
                  <option value="projects" className="bg-warning text-black">
                    Projects
                  </option>
                  <option value="business" className="bg-danger text-black">
                    Business
                  </option>
                  <option value="Personal" className="bg-info text-black">
                    Personal
                  </option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <textarea
                  name="nota"
                  cols="10"
                  rows="2"
                  className="form-control w-100"
                  placeholder="Escribe tu nota"
                ></textarea>
              </div>
            </div>
          </form>
        </Modal.Body>
        <div className="d-flex justify-content-center my-2">
          <Button>Añadir</Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

const Button = styled.button`
  color: white;
  background: #8784d9;
  border: 0;
  padding: 7px 12px;
  border-radius: 0.2em;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #6763bf;
    color: white;
    transform: scale(1.05);
  }
`;

export default ModalCreateNotes;
