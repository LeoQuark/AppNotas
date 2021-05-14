import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validation.js";
import {
  isRolValid,
  isEmailValid,
  existUserForId,
} from "../helpers/db-validators.js";

import {
  login,
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} from "../controllers/usersControllers.js";

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
    check("email").custom(isEmailValid),
    //check buscará el elemento rol del req.body y lo pasará a la funcion dentro de custom()
    check("rol").custom(isRolValid),
    validarCampos,
  ],
  createUser
);

router.put(
  "/update/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existUserForId),
    //en el caso de enviar el rol, validarlo
    check("rol").custom(isRolValid),
    validarCampos,
  ],
  updateUser
);

router.get("/get-all", getUsers);

router.delete(
  "/delete/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existUserForId),
    validarCampos,
  ],
  deleteUser
);

router.post("/login", login);

export default router;
