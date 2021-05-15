export const isAdminRole = async (req, res, next) => {
  //Verificamos que venga el user dentro del reques
  if (!req.user) {
    return res.status(500).json({
      msg: "Se quiere verificar el rol sin validar antes el token",
    });
  }

  //Obtenemos el rol y el nombre del usuario
  const { rol, name } = req.user;

  //Verificamos que el rol sea de administrador
  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `El usuario ${name} no es administrador - no puede hacer esto`,
    });
  }

  next();
};

export const haveRol = (...rol) => {
  // con ...rol asigno los n roles que pase por argumento
  //Retorno una funcion que posee los valores necesarios para seguir con la peticion
  return async (req, res, next) => {
    //Verificamos que venga el user dentro del reques
    if (!req.user) {
      return res.status(500).json({
        msg: "Se quiere verificar el rol sin validar antes el token",
      });
    }

    //Verificamos que el req.user.rol se encuentre dentro de rol
    if (!rol.includes(req.user.rol)) {
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles [ ${rol} ]`,
      });
    }
    next();
  };
};

export default { isAdminRole, haveRol };
