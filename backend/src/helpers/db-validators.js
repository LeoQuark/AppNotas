//Helpers --> archivos con funciones que nos ayudarán a trabajar y mantener un codigo limpio y reutilizable
import Role from "../models/role.js";
import User from "../models/user.js";

export const isRolValid = async (rol = "") => {
  //esto buscará si existe el rol en la bd del scheman rol
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

//Verificar si el correo existe
export const isEmailValid = async (email = "") => {
  //Buscará si el email ya se encuentra en algun otro schema user
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`El email ${email} ya se encuentra ocupado`);
  }
};

//Verificar si el id existe
export const existUserForId = async (id) => {
  //Buscará si el id ya se encuentra en algun otro schema user
  const existeUser = await User.findById(id);
  if (!existeUser) {
    throw new Error(`El id ${id} no existe`);
  }
};

export default { isRolValid, isEmailValid, existUserForId };
