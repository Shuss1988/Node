const express = require("express");
const CarsRoutes = express.Router();
const { upload } = require("../../middlewares/files.middleware");
const { isAuth } = require("../../middlewares/auth.middleware");
const {
  retrieveAllCars,
  retrieveCarsById,
  createCars,
  updateCarsById,
  deleteCarsById,
} = require("../controllers/cars.controller");

CarsRoutes.get("/", retrieveAllCars);
CarsRoutes.get("/:id", retrieveCarsById);
CarsRoutes.post("/", [isAuth], upload.single("image"), createCars);
CarsRoutes.patch("/:id", upload.single("image"), updateCarsById);
CarsRoutes.delete("/:id", deleteCarsById);

module.exports = CarsRoutes;
