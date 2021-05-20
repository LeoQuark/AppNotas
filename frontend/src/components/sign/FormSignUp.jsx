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
      <div className="mx-auto w-72 bg-white">
        <form onSubmit={handleSubmit} className="py-2">
          <div className="pt-3">
            <label className="block text-xs pb-1 text-uppercase">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="nombre, avatar ... "
              className="w-full text-sm p-2 pl-2 rounded border-0 shadow-md"
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-3">
            <label className="block text-xs pb-1 text-uppercase">Correo</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className="w-full text-sm p-2 pl-2 rounded border-0 shadow-md"
              onChange={handleInputChange}
            />
          </div>
          <div className="py-4">
            <label className="block text-xs">Contaseña</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full text-sm p-2 pl-2 rounded border-0 shadow-md"
              onChange={handleInputChange}
            />
          </div>
          {/* <div>
            <label class="inline-flex items-center my-2">
              <input
                type="checkbox"
                className="form-check appearance-none checked:bg-blue-300 checked:border-transparent rounded focus:border-transparent"
                name="remember"
                value="true"
              />
              <span class="ml-2 text-xs">Recordar contraseña</span>
            </label>
          </div> */}
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="bg-indigo-500 rounded p-2 px-1 text-sm text-white transition duration-100 ease-in-out hover:bg-indigo-600 transform hover:scale-110"
            >
              Crea tu cuenta
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const Img = styled.img`
  border: 4px solid #6763bf;
`;

export default FormSignUp;
