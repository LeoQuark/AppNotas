import bcryptjs from "bcryptjs";
import generateJwt from "../helpers/generate-jwt.js";
import User from "../models/user.js";

//Funcion sincronica para el login -> POST
export const login = async (req, res) => {
  const { email, password } = req.body;

  //verificar si el correo existe el
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      msg: "Usuario / Password no son correctos - correo",
    });
  }

  //Verificar si el usuario está activos --> state: true
  if (!user.state) {
    return res.status(400).json({
      msg: "Usuario / Password no son correctos - state: false",
    });
  }

  //Verificar la contraseña del
  const validPassword = bcryptjs.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      msg: "Usuario / Password no son correctos - password",
    });
  }

  //Generar el JWT
  const token = await generateJwt(user.id);

  res.status(200).json({
    user,
    token,
  });

  try {
    res.json({
      msg: "Login Ok",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Hable con el administrador",
    });
  }
};

export default { login };
