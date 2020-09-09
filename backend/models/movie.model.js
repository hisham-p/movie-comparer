const mongoose = require('mongoose');
//setting up schema
let Movies = new mongoose.Schema({
    id: String,
    title: String,
    year: String,
    genres: Array,
    ratings: Array,
    poster: String,
    contentRating: String,
    duration: String,
    releaseDate: { type: Date, default: Date.now },
    averageRating: Number,
    originalTitle: String,
    storyline: String,
    actors: Array,
    imdbRating: String,
    language: String,
    posterurl: String,
});

//model creation
module.exports = mongoose.model('Movies', Movies);


