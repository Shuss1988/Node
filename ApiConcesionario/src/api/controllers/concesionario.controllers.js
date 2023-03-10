const Concesionario = require("../models/concesionario.model");

const retrieveAllConcesionario = async (req, res, next) => {
  try {
    const concesionario = await Concesionario.find().populate("cars");
    res.status(200).json(concesionario);
  } catch (error) {
    return next(error);
  }
};

const retrieveConcesionarioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const concesionario = await Concesionario.findById(id).populate("cars");
    res.status(200).json(concesionario);
  } catch (error) {
    return next(error);
  }
};

const createConcesionario = async (req, res, next) => {
  try {
    const concesionario = new Concesionario(req.body);
    const concesionarioDB = await concesionario.save();
    res.status(201).json(concesionarioDB);
  } catch (error) {
    return next(error);
  }
};

const updateConcesionarioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateConcesionario = await Concesionario.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateConcesionario);
  } catch (error) {
    return next(error);
  }
};

const deleteConcesionarioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const concesionario = await Concesionario.findByIdAndDelete(id);
    res.status(200).json(concesionario);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  retrieveAllConcesionario,
  retrieveConcesionarioById,
  createConcesionario,
  updateConcesionarioById,
  deleteConcesionarioById,
};
