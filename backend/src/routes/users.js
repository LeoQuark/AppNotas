import express from "express";
import { login, createUser } from "../controllers/usersControllers";

//Router nos brindará el soporte para peticiones POST,GET,PUSH,DELETE
const router = express.Router();

//Se crean los tipos de peticiones con su respectiva ruta y la funcion a realizar
router.post("/login", login);
router.post("/create", createUser);

export default router;
