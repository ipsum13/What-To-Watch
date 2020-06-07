const mongoose = require("mongoose");
const { Schema } = mongoose;

const likedMoviesSchema = new Schema({
  title: { type: String },
  movieId: { type: Number },
  rating: { type: Number },
  poster: { type: String },
  releaseDate: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = LikedMovies = mongoose.model("LikedMovies", likedMoviesSchema);
