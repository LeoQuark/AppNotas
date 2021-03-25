import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Navbar;
