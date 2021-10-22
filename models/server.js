const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ususariosPath = "/api/user";
    // Middlewares
    this.midlewares();
    //Rutas
    this.routes();
  }
  midlewares() {
    //CORS
    this.app.use(cors());
    //Parseo y Lectura del body
    this.app.use(express.json());
    // Servir Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.ususariosPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Server Satrted on Port: " + this.port);
    });
  }
}

module.exports = Server;
