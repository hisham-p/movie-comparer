const mongoose = require('mongoose');
//setting up schema
let Movies = new mongoose.Schema({
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: Array,
    genres: Array,
    director: String,
    writers: Array,
    actors: Array,
    plot: String,
    poster: String,
    imdb: {
        id: String,
        rating: Number,
        votes: Number
    },
    tomato: {
        meter: Number,
        image: String,
        rating: Number,
        reviews: Number,
        fresh: Number,
        consensus: String,
        userMeter: Number,
        userRating: Number,
        userReviews: Number
    },
    metacritic: Number,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    type: String,
});

//model creation
module.exports = mongoose.model('Movies', Movies);
