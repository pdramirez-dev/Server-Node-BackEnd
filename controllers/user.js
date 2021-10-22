const { request, response } = require("express");

const userGet = (req= request, res = response) => {
const {q,nombre="No name",token,page=1,limit=10} = req.query;
  res.json({
    msg: "get api",
    q,
    nombre,
    token,
    page,
    limit
  });
};

const userPut = (req= request, res = response) => {

  const {id}= req.params;
  res.json({
    msg: "put api-usuariro",
    id
  });
};
const userPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;

  if (nombre == undefined || edad == undefined) {
    res.status(400).json({
      msg: "Datos no enviados",
    });
  } else {
    res.json({
      msg: "Succes Add user",
      nombre,
      edad,
    });
  }


};
const userPatch = (req, res = response) => {
  res.json({
    msg: "Patch api",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "Delete api",
  });
};
module.exports = {
  userGet,
  userPut,
  userPost,
  userPatch,
  userDelete,
};
