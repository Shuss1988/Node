const express = require("express");
const ConcesionarioRoutes = express.Router();
const {
  retrieveAllConcesionario,
  retrieveConcesionarioById,
  createConcesionario,
  updateConcesionarioById,
  deleteConcesionarioById,
} = require("../controllers/concesionario.controllers");

ConcesionarioRoutes.get("/", retrieveAllConcesionario);
ConcesionarioRoutes.get("/:id", retrieveConcesionarioById);
ConcesionarioRoutes.post("/", createConcesionario);
ConcesionarioRoutes.patch("/:id", updateConcesionarioById);
ConcesionarioRoutes.delete("/:id", deleteConcesionarioById);

module.exports = ConcesionarioRoutes;
