/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <nav id="sidebar">
          <div className="userData bg-violeta-oscuro pt-3">
            <div className="d-flex justify-content-center">
              <img src="https://picsum.photos/200" className="img-fluid" />
            </div>
            <div className="d-flex justify-content-center py-2">
              <h5 className="text-capitalize">leonardo peña</h5>
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
        </nav>
        <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
          <div className="container-fluid">
            <div className="navbar-brand">
              <div className="d-flex">
                <div className="user-data">
                  <div className="d-flex align-items-center">
                    <button className="btn bg-white border-0">
                      <i className="far fa-bell fa-lg"></i>
                      <span className="badge bg-danger rounded-circle px-1 py-1 mb-2">
                        {" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              {/* podría poner un collapse (bootstrap 5) para apretar el icono de la lupa y que aparezca el input  */}
              <div className="input-group mx-4">
                <div className="d-flex align-items-center mx-3 ">
                  <i className="fas fa-search fa-lg text-secondary"></i>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm border-0"
                  placeholder="Buscar"
                />
              </div>
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-white shadow-sm"
              >
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
