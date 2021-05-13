/*
    Schema 
    type: tipo de dato
    required: si es requerido o no, se puede pasar un arreglo en caso de que queramos mostrar un error
    unique: para decir si el correo usado debe ser unico
    emun: posibles valores que puede tomar (array)
    default: valor por defecto
*/

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    emun: ["AdMIN_ROLE", "USER_ROLE"],
  },
  google: {
    type: Boolean,
    default: false,
  },
});

export default model("User", UserSchema);
