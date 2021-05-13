//Helpers --> archivos con funciones que nos ayudarán a trabajar y mantener un codigo limpio y reutilizable
import Role from "../models/role.js";

export const isRolValid = async (rol = "") => {
  //esto buscará si existe el rol en la bd del scheman rol
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

export default isRolValid;
