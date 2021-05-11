//Se importan las rutas de las tablas de la api
import userRoutes from "users";

//Se exportan para consumir las rutas desde /src/index.js
module.exports = (app) => {
  app.use("/api/user", userRoutes);
};
