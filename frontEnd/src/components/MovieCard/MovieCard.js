import React, { Fragment } from "react";
import "./MovieCard.css";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledMovie,
  StyledCarousel,
  Overlay,
  Poster,
  Carousel,
  SearchPoster,
} from "./styled";

const MovieCard = (props) => {
  const { children } = props;
  return (
    <Fragment>
      {props.carousel ? (
        <StyledCarousel>
          {props.clickable ? (
            <Link
              to={{
                pathname: `/movies/${props.movieId}`,
                movieName: `${props.movieName}`,
              }}
            >
              <Carousel src={props.image} alt="moviecard" />
            </Link>
          ) : (
            <img src={props.image} alt="moviecard" />
          )}
        </StyledCarousel>
      ) : (
        <StyledMovie>
          {props.clickable ? (
            <Link
              to={{
                pathname: `/movies/${props.movieId}`,
                movieName: `${props.movieName}`,
              }}
            >
              {props.searchImage ? (
                <Fragment>
                <SearchPoster src={props.image} alt="moviecard" />
                <Overlay>{children}</Overlay>
                </Fragment>
              ) : (
                <Poster src={props.image} alt="moviecard" />
              )}
            </Link>
          ) : (
            <img src={props.image} alt="moviecard" />
          )}
        </StyledMovie>
      )}
    </Fragment>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieCard;
