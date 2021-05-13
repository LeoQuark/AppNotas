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

//Funcion sincronica para actualizar el usuario -> PUT
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    //Exluyo el _id, password, google, email el resto se lo asigno a restoUser
    const { _id, password, google, email, ...restoUser } = req.body;

    if (password) {
      //Encriptar la contraseña
      const saltos = bcryptjs.genSaltSync();
      restoUser.password = bcryptjs.hashSync(password, saltos);
    }

    //Buscar en el schema user el id y cambia (update) lo del objeto restoUser
    const user = await User.findByIdAndUpdate(id, restoUser);

    res.status(200).json({
      msg: "Usuario actualizado",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
};

//Funcion sincronica para obtener usuarios -> GET
export const getUsers = async (req, res) => {
  try {
    //req.query son las consultas hechas en la url con ?limite=5
    //desde y limite viene como string, ahi que pasar su valor a int [desde,limite]
    //url example --> localhost:4000/api/user/get-all?desde=5&limite=10
    const { desde = 0, limite = 5 } = req.query;

    //Busca todos los usuarios del schema user con limite 2
    const user = await User.find().skip(Number(desde)).limit(Number(limite));

    res.json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
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

//Se exportan las funciones para que sean consumidas en /src/routes/users.js
export default { login, createUser, getUsers, updateUser };
