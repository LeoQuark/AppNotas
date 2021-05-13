import mongoose from "mongoose";
import User from "../models/user.js";
//bcryptjs para encriptar
import bcryptjs from "bcryptjs";

//Funcion sincronica para crear un usuario -> POST
export const createUser = async (req, res) => {
  try {
    //Valores obtenidos del req.body
    const { name, email, password, rol } = req.body;

    //Crea nueva instancia del modelo schema users.js pasandole un objeto con los datos del req.body
    const user = new User({
      name,
      email,
      password,
      rol,
    });

    //Verificar si el correo existente
    const existeEmail = await User.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        msg: "El correo ya se encuentra registrado",
      });
    }

    //Encriptar la contraseña
    const saltos = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, saltos);

    //Guardamos el registro del user para
    await user.save();

    res.status(200).json({
      user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

//Funcion sincronica para el login -> POST
export const login = async (req, res) => {
  try {
    res.json({
      msg: "si",
    });
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
