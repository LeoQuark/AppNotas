import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    // user: {
    //   name: "Leonardo Peña",
    //   age: 23,
    //   email: "leonardo.pfuentes@gmail.com"
    // },
    user: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    console.log("getUser");
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
