const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CinesaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],

    },
    {
        timestamps: true,
    })
const Cinesa = mongoose.model("Cinesa", CinesaSchema);

module.exports = Cinesa;
