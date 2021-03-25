import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// context
import UserContext from "../context/User/UserContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <nav id="sidebar">
        {user ? (
          <div>
            <div className="userData bg-violeta-oscuro pt-3">
              <div className="d-flex justify-content-center">
                <img src="https://picsum.photos/200" className="img-fluid" />
              </div>
              <div className="text-center py-1">
                <h5 className="text-capitalizer">{user.name}</h5>
                <p className="text-xs py-1">{user.email}</p>
              </div>
            </div>
            <ul className="list-unstyled m-2 sidebar-menu">
              <li>
                <Link>
                  <i className="fas fa-user fa-lg"></i>
                  <p>Perfil</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="far fa-sticky-note fa-lg"></i>
                  <p>Inicio</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fas fa-list fa-lg"></i>
                  <p>Tareas</p>
                </Link>
              </li>
              <li>
                <Link>
                  <i className="fas fa-cog fa-lg"></i>
                  <p>Configuración</p>
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled pt-3">
              <li className="mx-4">
                <Link className="d-flex text-decoration-none">
                  <span></span>
                  <p className="mx-4 text-white">Proyectos</p>
                </Link>
              </li>
              <li className="mx-4">
                <Link className="d-flex text-decoration-none">
                  <span></span>
                  <p className="mx-4 text-white">Trabajo</p>
                </Link>
              </li>
              <li className="mx-4">
                <Link className="d-flex text-decoration-none">
                  <span></span>
                  <p className="mx-4 text-white">Personal</p>
                </Link>
              </li>
            </ul>
            <footer className="">
              <div className="d-flex justify-content-center mt-4">
                <p className="text-xs">
                  Copyright <i className="far fa-copyright fa-xs mx-1"></i>
                  2021 | Leonardo Peña Fuentes
                </p>
              </div>
            </footer>
          </div>
        ) : (
          <div className="row align-items-center vh-100">
            <div className="d-flex justify-content-center">
              <Link
                to="/sign"
                className="bg-transparent rounded border border-white border-2 shadow w-75 text-decoration-none text-white"
              >
                <div className="d-flex justify-content-center align-items-center my-3 mx-2">
                  <i className="fas fa-user-circle fa-2x"></i>
                  <p className="my-auto mx-2 text-capitalize">inicia sesión</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

const Button = styled.button`
  background: #8784d9;
  color: white;
  padding: 8px;
  border: 1px solid white;
  border-radius: 0.2em;
  transition: all 0.1s;

  :hover {
    color: #8784d9;
    background: white;
  }
`;

export default Sidebar;
