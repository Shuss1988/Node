const Cars = require("../models/cars.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");

const retrieveAllCars = async (req, res, next) => {
  try {
    const cars = await Cars.find();
    res.status(200).json(cars);
  } catch (error) {
    return next(error);
  }
};

const retrieveCarsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findById(id);
    res.status(200).json(cars);
  } catch (error) {
    return next(error);
  }
};

const createCars = async (req, res, next) => {
  try {
    const cars = new Cars({
      ...req.body,
      image: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dfnh5hecu/image/upload/v1678091587/Resources/orionthemes-placeholder-image_lkvf3q.jpg",
    });
    const carsDB = await cars.save();
    return res.status(201).json(carsDB);
  } catch (error) {
    return next(error);
  }
};

const updateCarsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCars = new Cars(req.body);
    newCars._id = id;

    const originalCars = await Cars.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalCars.image);
      newCars.image = req.file.path;
    }
    await Cars.findByIdAndUpdate(id, newCars);
    return res.status(200).json(newCars);
  } catch (error) {
    return next(error);
  }
};

const deleteCarsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findByIdAndDelete(id);
    res.status(200).json(cars);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  retrieveAllCars,
  retrieveCarsById,
  createCars,
  updateCarsById,
  deleteCarsById,
};
