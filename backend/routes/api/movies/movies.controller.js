const Movies = require('../../../models/movie.model');

exports.getAllMovies = async (req, res) => {
    try {
        let data = await Movies.find(req.query);
        res.status(200).send({ status: true, movies: data })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}
exports.getLeaderBoard = async (req, res) => {
    try {
        let data = await Movies.find(req.query, null, { sort: { votes: 'desc' } });
        res.status(200).send({ status: true, movies: data })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}

exports.getPrefences = async (req, res) => {
    try {
        let genres = await Movies.find().distinct('genres')
        let languages = await Movies.find().distinct('language')
        res.status(200).send({ status: true, genres: genres, languages: languages })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}

exports.addVote = async (req, res) => {
    try {
        await Movies.findOneAndUpdate({ id: req.params.id }, { $inc: { votes: 1 } }, { new: true })
        res.status(200).send({ status: true, message: "success" })
    } catch (error) {
        return res.json({
            status: false,
            message: error.message
        });
    }
}