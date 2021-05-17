import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setUserSessionStorage } from "../../Utils/Commons.js";

const FormSignUp = () => {
  const history = useHistory();
  const [dataUser, setDataUser] = useState({});

  const handleInputChange = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
    // console.log(dataUser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    };

    const res = await fetch(
      `http://localhost:4000/api/user/create`,
      requestOptions
    );

    //Extraigo el status ya que no quiero que sea grabado en el context user
    const { status, ...datos } = await res.json();

    console.log(res.status, datos);
    if (res.status === 200) {
      //setUser(datos);
      setUserSessionStorage(datos.token, JSON.stringify(datos.user));
      //console.log(getUserSessionStorage());
      history.push(`/${datos.user.uid}`);
    }
  };

  return (
    <React.Fragment>
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mb-3">
          <Img
            src="https://picsum.photos/200"
            alt=""
            className="img-fluid rounded-circle w-50 h-50"
          />
        </div>
        <div className="d-flex justify-content-center my-2">
          <h3 className="text-capitalize">Crea un usuario</h3>
        </div>
        <div className="form-group py-2">
          <label className="">Nombre</label>
          <div className="input-group">
            <input
              type="text"
              name="name"
              className="form-control form-control-sm"
              placeholder="Nombre de usuario"
              onChange={handleInputChange}
            />
          </div>
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
        <div className="d-flex justify-content-center my-2">
          <button type="submit" className="btn btn-success">
            Crear cuenta
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

const Img = styled.img`
  border: 4px solid #6763bf;
`;

export default FormSignUp;
