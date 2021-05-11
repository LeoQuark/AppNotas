//funcion sincronica para el login -> POST
const login = (req, res) => {
  try {
    res.json({
      message: "hola",
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

//Funcion sincronica para crear un usuario -> POST
const createUser = (req, res) => {
  try {
    // const { email, password } = req.body;
    console.log("hola");
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

//Se exportan las funciones para que sean consumidas en /src/routes/users.js
module.exports = {
  login,
  createUser,
};
