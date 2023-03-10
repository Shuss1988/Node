const express = require("express");
const Cinesa = require("../models/cinesa.model");

const router = express.Router();
//GET
router.get("/", async (req, res, next) => {
    try {
        const cinesa = await Cinesa.find();
        return res.status(200).json(cinesa);
    } catch (error) {
        return next(error)
    }
})
//DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Cinesa.findByIdAndDelete(id);
    return res.status(200).json("Cinesa deleted!");
  } catch (error) {
    return next(error);
  }
});

//PUT
router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const cinesaModified = new Cinesa(req.body);
      //Igualamos el _id del nuevo personaje al id actual para que no me lo modifique
      cinesaModified._id = id;
      //Encontrar por id y pararle el album modificado
      const cinesaUpdated = await Cinesa.findByIdAndUpdate(id, cinesaUpdated);
      return res.status(200).json(cinesaUpdated);
    } catch (error) {
      return next(error);
    }
  });
  //POST
 router.post("/", async (req, res, next) => {
    try {
        const newCinesa = new Cinesa(req.body);
        const cinesaMovie = await newCinesa.save();
         return res.status(201).json(cinesaMovie);
     } catch (error) {
        return next(error)
     }
});

router
  module.exports = router;