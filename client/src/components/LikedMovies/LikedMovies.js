import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLikedMovies } from "../../actions/likedMovies";
import MovieCard from "../MovieCard/MovieCard";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/Api";
import {
  Title,
  LikedMovieGrid,
} from "./LikedMovies.styled";

class LikedMovies extends Component {
  componentDidMount() {
    this.props.fetchLikedMovies();
  }

  renderLikedMovies() {
    const { isFetching, movies } = this.props.likedMovies;
    if (isFetching) {
      return <h1>Loading...</h1>;
    }

    if (movies.length === 0) {
      return (
        <div>
          <h1>You have not liked any movies yet. Search for movies to like.</h1>
        </div>
      );
    }
    
    if (movies.length > 0) {
     return  (<LikedMovieGrid>
      {movies.map((movie) => 
         (
          <MovieCard
            key={movie.movieId}
            clickable={true}
            image={
              movie.poster
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${movie.poster}`
                : "./images/no_image.jpg"
            }
            movieId={movie.movieId}
            movieName={movie.title}
          />
        )
      )};
      </LikedMovieGrid>)
     
    }
    
  }

  render() {
    return <div>
      <Title>Favorite movies:</Title>
      {this.renderLikedMovies()}
      </div>;
  }
}

const mapStateToProps = (state) => ({
  likedMovies: state.likedMovies,
});

export default connect(mapStateToProps, { fetchLikedMovies })(LikedMovies);
