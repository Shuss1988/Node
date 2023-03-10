const express = require("express");
const Movie = require("../models/movie.model");

const router = express.Router();


/*router.get("/movies", async(req, res) => {

    return Movie.find().then(movies => {
        return res.status(200).json(movies);
    }).catch(error => {
        return res.status(500).json(error);
    })
})*/
//GET a los movies por ID

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if(movie) {
        return res.status(200).json(movie);
         }else{
        return res.status(404).json("no movies found in DB");
        }
    } catch (error){
        return res.status(500).json(error);
    }
});
//Get alos movies TITLE
router.get("/title/:title", async (req, res) => {
    const title = req.params.title;
    try {
        const movie = await Movie.find({ title: title });
        if(movie) {
            return res.status(200).json(movie);
             }else{
            return res.status(404).json("no movies found in DB");
            }
        } catch (error){
            return res.status(500).json(error);
        }
});
//GET alos movies por GENRE
router.get("/genre/:genre", async (req, res) => {
    const genre = req.params.genre;
    try {
        const movie = await Movie.find({ genre: genre });
        if(movie) {
            return res.status(200).json(movie);
             }else{
            return res.status(404).json("no movies found in DB");
            }
        } catch (error){
            return res.status(500).json(error);
        }
});
//GET a los movies por YEAR
router.get("/yearGreaterThan/:year", async (req, res) => {
    const year = req.params.year;
    try {
        const movie = await Movie.find({year: {$gt:year}});
        
            return res.status(200).json(movie);
            
        } catch (error){
            
        }
});



//POST
router.post("/", async (req, res, next) => {
    try {
        const newMovie = new Movie(req.body);
        const createMovie = await newMovie.save();
         return res.status(201).json(createMovie);
     } catch (error) {
        return next(error)
     }
});

//GET
router.get("/", async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return next(error);
    }
});
//DELETE
router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await Movie.findByIdAndDelete(id);
      return res.status(200).json("Movie deleted!");
    } catch (error) {
      return next(error);
    }
  });

//PUT
  router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const movieModified = new Movie(req.body);
      movieModified._id = id;
      const movieUpdated = await Movie.findByIdAndUpdate(id, movieModified);
      return res.status(200).json(movieUpdated);
    } catch (error) {
      return next(error);
    }
  });




module.exports = router;