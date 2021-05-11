import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

//Creación del estado global User, donde se hará uso de useContext y useReducer.
const UserState = (props) => {
  const initialState = {
    user: {
      name: "Leonardo Peña",
      age: 23,
      email: "leonardo.pfuentes@gmail.com",
    },
    // user: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    console.log("getUser");
  };

  //Se retorna el UserContext.Provider para que los hijos de este componente puedan acceder a los valores del state global User y sus metodos o funciones.
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
