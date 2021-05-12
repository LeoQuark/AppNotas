import { Router } from "express";
const router = Router();
import { login, createUser, getUser } from "../controllers/usersControllers.js";

//Router nos brindará el soporte para peticiones POST,GET,PUSH,DELETE

//Se crean los tipos de peticiones con su respectiva ruta y la funcion a realizar
router.post("/login", login);
router.post("/create", createUser);
router.get("/getuser", getUser);

export default router;
