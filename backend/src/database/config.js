import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Base de datos online");
  } catch (err) {
    console.log(err);
    throw new Error("Error al iniciar la base de datos");
  }
};

export default connectionDB;
