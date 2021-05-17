import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setUserSessionStorage } from "../../Utils/Commons.js";

const FormSignIn = () => {
  //Estados
  const history = useHistory();
  const [dataUser, setDataUser] = useState({});
  const [errorLogin, setErrorLogin] = useState(false);
  const [dataError, setDataError] = useState({});
  //Funciones

  //Funcion para asiganar al dataUser lo que se va escribiendo en los input del form
  const handleInputChange = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
    //console.log(dataUser);
  };

  //Funcion para enviar(POST) los datos del dataUser al servidor
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Opciones para el fetch ---> method, headers y body(data)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    };

    const res = await fetch(
      `http://localhost:4000/api/auth/login`,
      requestOptions
    );

    //Extraigo el status ya que no quiero que sea grabado en el context user
    const { status, ...datos } = await res.json();

    console.log(res.status);
    if (res.status === 200) {
      //setUser(datos);
      setUserSessionStorage(datos.token, JSON.stringify(datos.user));
      //console.log(getUserSessionStorage());
      history.push(`/${datos.user.uid}`);
    } else {
      setErrorLogin(true);
      setDataError(datos);
    }
  };
  //console.log(dataError);

  const alertError = (error) => {
    //console.log(error);
    if (error.typeError === "email") {
      return (
        <div className="alert alert-danger py-1">{`${error.typeError} incorrecto`}</div>
      );
    } else if (error.typeError === "password") {
      return (
        <div className="alert alert-danger py-1">{`${error.typeError} incorrecta`}</div>
      );
    } else if (error.typeError === "state") {
      return (
        <div className="alert alert-danger py-1">Ingresa un usuario válido</div>
      );
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="w-75">
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
          <label className="">Correo</label>
          <input
            type="text"
            name="email"
            id="correoID"
            className="form-control form-control-sm"
            placeholder="example@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group py-2">
          <label className="">Contraseña</label>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id="passwordId"
              className="form-control form-control-sm border-end-0"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <div className="input-group-text btn border border-start-0">
              <i className="far fa-eye-slash"></i>
            </div>
          </div>
        </div>
        <div className="input-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label text-xs">
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
        <div className="d-flex justify-content-center mt-2">
          {errorLogin && alertError(dataError)}
        </div>
      </form>
    </React.Fragment>
  );
};

const Alink = styled.a`
  color: #8784d9;

  :hover {
    color: #6763bf;
  }
`;

const Img = styled.img`
  border: 4px solid #6763bf;
`;

export default FormSignIn;
