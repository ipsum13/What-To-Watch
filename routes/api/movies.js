require('dotenv').config();
const express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

// const User = require("../../models/User");
const LikedMovies = require("../../models/LikedMovies");
const User = require('../../models/User');

const auth = require("../../middleware/auth");

// @route GET api/movies/liked_movies
// @desc Test route
// @access Private
router.get('/liked_movies', auth, async (req, res) => {
  const likedMovies = await LikedMovies.find({ user: req.user.id });
  res.status(200).send(likedMovies);
});

// @route POST api/movies/liked_movies
// @desc Test route
// @access Private
router.post('/liked_movies', auth, async (req, res) => {
  const { title, movieId, rating, poster, releaseDate } = req.body;
  const currentMovie = await LikedMovies.findOne({ movieId });
  
  const user = await User.findOne({ _id: req.user.id })
  if (currentMovie) {
    return;
  }
  const likedMovie = new LikedMovies({
    movieId,
    title,
    rating,
    poster,
    releaseDate,
    user: req.user.id
  });
  try {
    await likedMovie.save();
    user.liked.push(movieId);
    await user.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send(e);
  }
});

// @route DELETE api/movies/liked_movies
// @desc Test route
// @access Private
router.delete('/liked_movies', auth, async (req, res, next) => {
  const { movieId } = req.query;
  try {
    const likedMovie = await LikedMovies.deleteOne({ movieId });
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = router;
