module.exports = function (app) {
    app.use('/movies', require('./api/movies'));
}