import React, { useState } from "react";
import styled from "styled-components";

const Sign = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <React.Fragment>
      <div className="container-fluid bg-violeta-claro vh-100">
        <div className="row">
          <Div className="col-8 vh-100">
            <div className="d-flex my-4 text-white mx-2">
              <i className="fas fa-meteor fa-2x"></i>
              <h3 className="mx-3">App Notas</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center px-4 my-5">
              <p className="text-6xl text-white my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              <div className="col-6 px-5 mt-5">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  iusto debitis sed rem architecto quasi?
                </p>
              </div>
            </div>
          </Div>
          <div className="col-4 bg-white vh-100">
            <div className="d-flex justify-content-end m-0">
              <button
                className="btn border-0"
                onClick={() => setSignIn(!signIn)}
              >
                Sign Up
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-100">
                <div className="d-flex justify-content-center my-4">
                  <form action="">
                    <div className="d-flex justify-content-center mb-3">
                      <Img
                        src="https://picsum.photos/200"
                        alt=""
                        className="img-fluid rounded-circle w-50 h-50"
                      />
                    </div>
                    <div className="d-flex justify-content-center my-2">
                      <h3 className="text-capitalize">inicia sesión</h3>
                    </div>
                    <div className="form-group p-0 my-2">
                      <label htmlFor="" className="text-sm">
                        Correo
                      </label>
                      <input
                        type="text"
                        name="correo"
                        id="correoID"
                        className="form-control form-control-sm"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="form-group py-2">
                      <label htmlFor="" className="">
                        Contraseña
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          name="password"
                          id="passwordId"
                          className="form-control form-control-sm border-end-0"
                          placeholder=""
                        />
                        <div className="input-group-text btn border border-start-0">
                          <i className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-xs"
                          for="flexCheckDefault"
                        >
                          Recordar tu contraseña
                        </label>
                      </div>
                    </div>
                    <div className="d-flex my-2 mt-4">
                      <p>
                        Si no tienes una cuenta, créate una <Alink>aquí.</Alink>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center my-2">
                      <button type="submit" className="btn btn-success">
                        Inicia Sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Div = styled.div`
  background: linear-gradient(to right bottom, #8784d9, #6763bf, #34788e);
`;

const Alink = styled.a`
  color: #8784d9;

  :hover {
    color: #6763bf;
  }
`;

const Img = styled.img`
  border: 4px solid #6763bf;
`;

export default Sign;
