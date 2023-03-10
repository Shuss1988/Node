const mongoose = require("mongoose")
const Movie = require("../Models/movie.model");

const movieDataSet = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

  const moviesDocuments = movieDataSet.map((movie) => new Movie(movie));

  mongoose.connect(
    "mongodb+srv://romanjuarezjesus:Flormarina30@cluster0.ryh9sze.mongodb.net/movieDB?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(async() => {
    const AllMovies = await Movie.find();
    
    if(AllMovies.length){
        await Movie.collection.drop();
        console.log("Collection dropped");
    }
  }).catch((error) => console.log("Error deleting Movies", error)).then(async () => {
    await Movie.insertMany(moviesDocuments);
    console.log("Movie collection created");
  }).catch((error) => console.log("Error inserting movies", error))
  .finally(() => mongoose.disconnect());
