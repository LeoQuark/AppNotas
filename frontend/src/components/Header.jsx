/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled">
            <li>
              <Link to="/">
                <i className="fas fa-th-large"></i>
                <p>Overview</p>
                <span></span>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fas fa-tasks"></i>
                <p>Task</p>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fas fa-file-alt"></i>
                <p>Document</p>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fas fa-headset text-white"></i>
                <p>Support</p>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <div className="navbar-brand">
              <div className="d-flex">
                <img
                  src="https://picsum.photos/200"
                  className="img-fluid rounded-circle"
                  width="45"
                  height="45"
                />
                <div className="user-data">
                  <div className="d-flex align-items-center">
                    <p className="mx-2 my-2">Hello Peter!</p>
                    <i className="far fa-bell fa-md"></i>
                    <span className="badge bg-danger rounded-circle px-1 py-1 mb-3">
                      {" "}
                    </span>
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
                  placeholder="Search"
                />
              </div>
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-light shadow"
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
