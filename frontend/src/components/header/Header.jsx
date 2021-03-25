/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// STATE
import UserState from "../context/User/UserState";

const Header = () => {
  return (
    <React.Fragment>
      <UserState>
        <div className="wrapper">
          <Navbar />
          <Sidebar />
        </div>
      </UserState>
    </React.Fragment>
  );
};

export default Header;
