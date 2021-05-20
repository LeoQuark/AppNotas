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
          <div className="grid grid-rows-10 h-screen rounded-br-3xl divide-y-2 divide-white px-1 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700">
            <div className="row-start-1 row-end-2">
              <div className="grid grid-cols-5 gap-1 pt-2">
                <div className="col-span-2 m-auto">
                  <div className="">
                    <img
                      src="https://picsum.photos/200"
                      className="w-16 h-16 rounded-full border-4 border-indigo-800"
                    />
                  </div>
                </div>
                <div className="col-span-3 my-auto">
                  <p className="font-mono text-white text-xl">{user.name}</p>
                  <p className="text-xs text-white">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="row-start-2 row-end-4 pt-4">
              <ul className="grid grid-rows-4 p-2 gap-2">
                <li className="">
                  <Link className="p-1 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:shadow-lg hover:translate-x-1">
                    <i className="fas fa-user fa-lg pt-1"></i>
                    <p className="pl-10 font-mono tracking-wider">Perfil</p>
                  </Link>
                </li>
                <li>
                  <Link className="p-1 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:shadow-lg hover:translate-x-1">
                    <i className="far fa-sticky-note fa-lg pt-1"></i>
                    <p className="pl-10 font-mono tracking-wider">Inicio</p>
                  </Link>
                </li>
                <li>
                  <Link className="p-1 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:shadow-lg hover:translate-x-1">
                    <i className="fas fa-list fa-lg pt-1"></i>
                    <p className="pl-10 font-mono tracking-wider">Tareas</p>
                  </Link>
                </li>
                <li>
                  <Link className="p-1 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:shadow-lg hover:translate-x-1">
                    <i className="fas fa-cog fa-lg pt-1"></i>
                    <p className="pl-10 font-mono tracking-wider">Ajustes</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row-span-1">
              <ul className="grid grid-row-4 m-4 gap-2">
                <li className="">
                  <Link className="p-2 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105 hover:shadow-lg hover:translate-x-2">
                    <div className="bg-yellow-500 rounded-full w-4 h-4 border-2 border-yellow-900 my-auto hover:animate-bounce"></div>
                    <p className="text-xs font-mono tracking-wider pl-8">
                      Projects
                    </p>
                  </Link>
                </li>
                <li className="">
                  <Link className="p-2 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105 hover:shadow-lg hover:translate-x-2">
                    <div className="bg-red-500 rounded-full w-4 h-4 border-2 border-red-900 my-auto hover:animate-bounce"></div>
                    <p className="text-xs font-mono tracking-wider pl-8">
                      Business
                    </p>
                  </Link>
                </li>
                <li className="">
                  <Link className="p-2 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 transform hover:scale-105 hover:shadow-lg hover:translate-x-2">
                    <div className="bg-green-500 rounded-full w-4 h-4 border-2 border-green-900 my-auto hover:animate-bounce"></div>
                    <p className="text-xs font-mono tracking-wider pl-8">
                      Personal
                    </p>
                  </Link>
                </li>
                <li className="pt-2">
                  <Link className="px-2 py-1 flex justify-start rounded rounded-tr-xl rounded-br-xl text-white transition delay-75 ease-in-out hover:bg-white hover:text-indigo-700 hover:shadow-lg">
                    <i className="fas fa-plus fa-xs my-auto"></i>
                    <p className="text-xs hover:text-sm font-mono tracking-wider pl-8">
                      Projects
                    </p>
                  </Link>
                </li>
              </ul>
              <div className="flex justify-center pt-8">
                <button className="p-1 btn border-2 rounded-lg font-mono text-xs text-gray-100 hover:bg-indigo-600">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
