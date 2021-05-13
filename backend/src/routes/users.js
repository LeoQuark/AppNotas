import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validation.js";
import { isRolValid } from "../helpers/db-validators.js";

import { login, createUser } from "../controllers/usersControllers.js";

//Router nos brindará el soporte para peticiones POST,GET,PUSH,DELETE
const router = Router();

//Se crean los tipos de peticiones con su respectiva ruta y la funcion a realizar
//router.PETICION('URL API',MIDDLEWARES,CONTROLADOR);
router.post(
  "/create",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "La contraseña debe ser de más de 5 letras").isLength({
      min: 5,
    }),
    check("email", "el correo no es valido").isEmail(),
    //check buscará el elemento rol del req.body y lo pasará a la funcion dentro de custom()
    check("rol").custom(isRolValid),
    validarCampos,
  ],
  createUser
);

router.post("/login", login);

export default router;
