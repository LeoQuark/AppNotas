/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <nav className="w-full bg-white fixed navbar">
        <div className="grid grid-cols-2 gap-2 h-14 bg-white">
          <div className="hidden md:block">
            <div className="my-3 mx-8">
              <form action="">
                <div className="relative">
                  <input
                    type="text"
                    name=""
                    placeholder="Busca tus notas"
                    className="rounded focus:ring focus:ring-purple-200 py-1 ml-12 shadow px-2"
                  />
                  <div className="absolute top-0 transform hover:scale-125 hover:bg-gray-200 hover:delay p-1 rounded-lg">
                    <i class="fas fa-search fa-lg"></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex justify-start md:justify-end md:mr-28">
              <div className="my-3 mx-2">
                <img
                  src="https://picsum.photos/200"
                  className="w-8 h-8 ml-2 md:ml-0 border-purple-700 border-2 rounded-full"
                />
              </div>
              <div className="my-auto mr-2 md:mr-4 text-base md:text-base">{`Hola ${user.name}!`}</div>
              <div className="my-auto static">
                <i class="far fa-bell fa-lg"></i>
                <div className="rounded-full absolute top-0 mt-3 ml-6">
                  <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
              </div>
              <div className="absolute right-0 mr-5 md:mr-8 my-1">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="static bg-white rounded border-gray-200 border-1 px-2 py-3 shadow"
                >
                  <div className="bg-gray-400 w-8 h-1 rounded "></div>
                  <div className="bg-gray-400 w-8 h-1 rounded my-1"></div>
                  <div className="bg-gray-400 w-8 h-1 rounded"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
