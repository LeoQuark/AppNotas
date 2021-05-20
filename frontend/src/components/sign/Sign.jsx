import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import { removeUserSessionStorage } from "../../Utils/Commons.js";

const Sign = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSingIn = (event) => {
    event.preventDefault();
    setSignIn(!signIn);
  };

  useEffect(() => {
    removeUserSessionStorage();
  }, []);

  return (
    <React.Fragment>
      <div className="h-screen">
        <div className="grid grid-cols-3 h-screen">
          <div className="col-span-1 bg-white">
            <div className="grid grid-rows-6 h-screen bg-white">
              <div className="row-span-1">
                <div className="flex justify-end p-3">
                  <button
                    className="text-indigo-900 font-mono font-light"
                    onClick={handleSingIn}
                  >
                    {signIn ? "Create una cuenta" : "Inicia sesión"}
                  </button>
                </div>
              </div>
              <div className="row-start-2 row-end-6">
                <div className="flex justify-center my-2">
                  <i className="block fas fa-meteor fa-3x animate-bounce text-indigo-600"></i>
                </div>
                <h3 className="text-center text-3xl font-mono text-indigo-900 tracking-widest">
                  App notas
                </h3>
                {signIn ? <FormSignIn /> : <FormSignUp />}
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-700">
            <div className="grid grid-rows-6 h-screen">
              <div className="row-span-1">
                <div className="flex justify-end p-4">
                  <div className="rounded-3xl border-4 border-white shadow-lg w-20 h-20">
                    <i className="block fas fa-meteor fa-3x text-white py-4 pl-3"></i>
                  </div>
                </div>
              </div>
              <div className="row-start-2 row-end-6 h-full">
                <div className="flex justify-center pt-20">
                  <p className="text-5xl font-mono font-bold text-white">
                    Crea, aprende y guarda
                  </p>
                </div>
                <div className="flex justify-center pt-16">
                  <a href="https://www.facebook.com/LeoQuark/">
                    <i className="fab fa-facebook text-white text-5xl shadow-lg rounded-full"></i>
                  </a>
                  <a href="https://github.com/LeoQuark">
                    <i className="fab fa-github text-white text-5xl mx-12 shadow-lg rounded-full"></i>
                  </a>
                  <a href="https://www.instagram.com/charmonium_/">
                    <i className="fas fa-user-circle text-white text-5xl shadow-lg rounded-full"></i>
                  </a>
                </div>
                <div className="flex justify-center pt-12">
                  <button
                    className="text-white text-sm font-mono border-4 border-white rounded-md shadow-lg px-4 py-2
                    transition duration-75 ease-in-out hover:bg-white hover:text-indigo-500 transform hover:scale-105"
                    onClick={handleSingIn}
                  >
                    Create un usuario
                  </button>
                </div>
              </div>
              <div className="row-start-6">
                <div className="flex justify-end pt-8">
                  <p className="font-mono text-white text-sm pr-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

/*
<div className="container-fluid">
        <div className="row">
          <Div className="col-8">
            <div className="d-flex my-4 text-white mx-2">
              <i className="fas fa-meteor fa-2x"></i>
              <h3 className="mx-3">App Notas</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center px-4 my-5">
              <p className="text-6xl text-white my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              <div className="col-6 px-5 mt-5">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  iusto debitis sed rem architecto quasi?
                </p>
              </div>
            </div>
          </Div>
          <div className="col-4 bg-white vh-100">
            <div className="d-flex justify-content-end m-0">
              <div
                className="btn btn-lg border-0"
                onClick={() => setSignIn(!signIn)}
              >
                Sign Up
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-100">
                <div className="d-flex justify-content-center my-4">
                  {signIn ? <FormSignIn /> : <FormSignUp />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/

// const Container = styled.div`
//   @media (max-width:576px){

//   }
// `;

const Div = styled.div`
  background: linear-gradient(to right bottom, #8784d9, #6763bf, #34788e);
`;

export default Sign;
