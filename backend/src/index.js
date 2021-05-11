import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

// import routes
import routes from "./routes/users";

// middlewares
const app = express();

path.join(__dirname + "/src");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// routes
//app.use("/api/user", userRoutes);
routes(app);

//Se declara el puerto en el que correrá el servidor por medio de .env o asignandole por defecto el port:4000
const PORT = process.env.PORT || 4000;

//Se inicia el servidor en determinado puerto (port)
app.listen(PORT, () => {
  try {
    console.log(`PORT ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
