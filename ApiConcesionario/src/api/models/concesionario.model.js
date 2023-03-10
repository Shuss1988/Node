const mongoose = require("mongoose");

const ConcesionarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cars" }],
  },
  {
    timestamps: true,
  }
);

const Concesionario = mongoose.model("Concesionario", ConcesionarioSchema);

module.exports = Concesionario;
