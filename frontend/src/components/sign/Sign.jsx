import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import { removeUserSessionStorage } from "../../Utils/Commons.js";

const Sign = () => {
  const [signIn, setSignIn] = useState(true);

  useEffect(() => {
    removeUserSessionStorage();
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

// const Container = styled.div`
//   @media (max-width:576px){

//   }
// `;

const Div = styled.div`
  background: linear-gradient(to right bottom, #8784d9, #6763bf, #34788e);
`;

export default Sign;
