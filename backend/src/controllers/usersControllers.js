import mongoose from "mongoose";
import User from "../models/user.js";

//Funcion sincronica para el login -> POST
export const login = (req, res) => {
  console.log("ss");
  try {
    console.log("si");
    //Valores obtenidos del req.body
    const body = req.body;

    //Crea nueva instancia del modelo schema users.js
    const user = new User(body);

    res.json({
      message: "hola",
      user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

//Funcion sincronica para crear un usuario -> POST
export const createUser = async (req, res) => {
  try {
    // const { email, password } = req.body;
    console.log("hola");
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

export const getUser = (req, res) => {
  try {
    res.json({
      data: "hola",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
};

//Se exportan las funciones para que sean consumidas en /src/routes/users.js
export default { login, createUser, getUser };
