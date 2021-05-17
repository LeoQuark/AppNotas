import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectionDB from "./database/config.js";

// import routes
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

//dotenv para emplear variables ocultas en .env
dotenv.config();

//Conectar a base de datos mongoose
connectionDB();

// middlewares -> funciones que se ejecutan previo a otras

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
//routes(app);

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
