import mongoose from "mongoose";
import User from "../models/user.js";
//bcryptjs para encriptar
import bcryptjs from "bcryptjs";

//Funcion sincronica para crear un usuario -> POST
export const createUser = async (req, res) => {
  try {
    //Valores obtenidos del req.body
    const { name, email, password, rol, state, google } = req.body;

    //Crea nueva instancia del modelo schema users.js pasandole un objeto con los datos del req.body
    const user = new User({
      name,
      email,
      password,
      rol,
      state,
      google,
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

    //query para contar los usuarios con el state = true, con la finalidad de no mostrarlos en el momento de realizar la peticion (en caso de que state=false), porque no es recomendable eliminarlo del todo de nuestra base de datos, es solo ocultarlo
    const query = { state: true };

    //esto para realizar promesas que tendrán un tiempo de respuesta debido al uso de "await", para que todas las promesas se hagan de manera simultanea ahorrando tiempo en la consulta
    const [totalUsuarios, usuarios] = await Promise.all([
      //Couenta todos los usuarios que cumplan con query
      User.countDocuments(query),
      //Busca todos los usuarios del schema user con limite 2
      User.find(query).skip(Number(desde)).limit(Number(limite)),
    ]);

    res.json({
      totalUsuarios,
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    //Borrar el usuario fisicamente, pero no se recomienda debido a que quizas el usuario haya modificado datos de otros usuarios o cualquier otra cosa y si lo borramos perderemos toda su informacion de todos lados
    //const user = await User.findByIdAndDelete(id);

    //En vez de borrarlo, cambiemos el state del usuario para que no nos devuelva sus datos en el response, asi mantenemos la integridad de nuestra BD
    const user = await User.findByIdAndUpdate(id, { state: false });

    //Usuario autenticados
    const userAuth = req.user;

    res.status(200).json({
      user,
      userAuth,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
};

//Se exportan las funciones para que sean consumidas en /src/routes/users.js
export default { createUser, getUsers, updateUser, deleteUser };
