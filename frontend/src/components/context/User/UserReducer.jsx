/* eslint-disable import/no-anonymous-default-export */
import { GET_USER } from "../types";

/*
    Creación de las acciones que podrá realizar el estado global User
    Las acciones estan declaradas como string en 'types.js' 
*/
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
