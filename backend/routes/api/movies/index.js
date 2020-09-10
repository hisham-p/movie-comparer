var express = require('express');
var router = express.Router();
const controller = require('./movies.controller');

router.get('/preferences', controller.getPrefences);
router.get('/all', controller.getAllMovies);
router.get('/leaderboard', controller.getLeaderBoard);

router.post('/:id/vote', controller.addVote);

module.exports = router;