const express = require("express");
const dotenv = require("dotenv");
const connect = require("./src/utils/database");
dotenv.config();
const server = express();

const PORT = process.env.PORT;
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


const router = express.Router();


const moviesRouters = require("./src/routes/movie.routes");
server.use("/api/v1/movies", moviesRouters);


const cinesaRouters = require("./src/routes/cinesa.routes");
server.use("/api/v1/cinesa", cinesaRouters);

//final de las rutas
server.use("/api/v1", router);


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});