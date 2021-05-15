import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validation.js";

import { login } from "../controllers/auth.js";

const router = Router();

router.post(
  "/login",
  [
    check("email", "el correo no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

export default router;
