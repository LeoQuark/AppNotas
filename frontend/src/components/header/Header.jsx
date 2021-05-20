/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { getUserSessionStorage } from "../../Utils/Commons";

// context
import UserContext from "../context/User/UserContext";

const Header = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // Obtengo el valor del session storage y se lo asigno al context
    setUser(getUserSessionStorage());
  }, []);

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Sidebar />
    </React.Fragment>
  );
};

export default Header;
