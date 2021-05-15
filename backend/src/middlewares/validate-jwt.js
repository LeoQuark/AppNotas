import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const validateJwt = async (req, res, next) => {
  //Obtengo el token del header
  const token = req.header("token");

  //Caso de que no se haya enviado el token
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    //Verificamos que el token sea el mismo, pasandole el secret or private key. Si es correcto el token nos retornara el payload que contiene {uid,iat(creacion),exp(expiracion)}
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //Al tener un verify exitoso, pasamos al request el uid. Este req seguirá pasando por los middlewares hasta llegar al controlador del usuario
    //req.uid = uid;

    const userAuth = await User.findById(uid);

    //Verifico si el usuario auth existe
    if (!userAuth) {
      return res.status(401).json({
        msg: "Token no valido - usuario no existe en BD",
      });
    }

    //Verificar si el usuario auth tiene el estado true del
    if (!userAuth.state) {
      return res.status(401).json({
        msg: "Token no valido - usuario con state false",
      });
    }

    req.user = userAuth;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no valido",
    });
  }
};

export default validateJwt;
