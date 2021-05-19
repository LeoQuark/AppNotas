import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import UserContext from "../context/User/UserContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <nav id="sidebar">
        {user && (
          <div className="grid grid-rows-2 gap-2">
            <div>
              <ul className="sidebar-menu my-4">
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
            </div>
            <div>
              <ul className="my-4 mx-10">
                <li className="my-4">
                  <Link className="flex justify-start">
                    <div className="bg-yellow-500 rounded-full w-2 h-2 my-auto"></div>
                    <p className="text-base ml-6">Projects</p>
                  </Link>
                </li>
                <li className="my-4">
                  <Link className="flex justify-start">
                    <div className="bg-red-600 rounded-full w-2 h-2 my-auto"></div>
                    <p className="text-base ml-6">Business</p>
                  </Link>
                </li>
                <li className="my-4">
                  <Link className="flex justify-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 my-auto"></div>
                    <p className="text-base ml-6">Personal</p>
                  </Link>
                </li>
                <li className="my-4">
                  <Link className="flex justify-start">
                    <div className="">+</div>
                    <p className="text-xs ml-6 mt-1">Agrega un categoria</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
