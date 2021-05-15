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
    emun: ["ADMIN_ROLE", "USER_ROLE", "OTHER_ROLE"],
  },
  google: {
    type: Boolean,
    default: false,
  },
  state: {
    type: Boolean,
    required: true,
  },
});

//Esto se usa para sobreescribir un metodo de schema de mongoose
//Debe ser con una funcion normal --> function()
UserSchema.methods.toJSON = function () {
  //ocupando destructuring extraigo como variables a __v,password y_id y con ..usuario
  const { __v, password, _id, ...user } = this.toObject();

  //Reescribo el atributo _id por uid y le asigno el mismo _id
  // forma 1 -> const userReWrite = { uid: _id, ...user };
  user.uid = _id;
  //retorno todos los datos en el res.json() removiendo __v y la contraseña
  return user;
};

export default model("User", UserSchema);
