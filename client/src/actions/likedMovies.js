import axios from 'axios';
import cogoToast from "cogo-toast";


import {
LIKE_MOVIE,
UNLIKE_MOVIE,
GET_LIKED_MOVIES
} from './types';

export const LikeMovie = values => async dispatch => {
  try {
    const request = await axios.post('/api/movies/liked_movies', values);
    const { data } = request;
    dispatch({ type: LIKE_MOVIE, payload: data });
    cogoToast.success(`You liked ${values.title}`, {
      position: "top-right",
    });
    
  } catch (e) {
    dispatch({ type: LIKE_MOVIE, payload: e });
  }
};

export const UnlikeMovie = movieId => async dispatch => {
  try {
    const request = await axios.delete('/api/movies/liked_movies', {
      params: {
        movieId
      }
    });
    const { data } = request;
    dispatch({ type: UNLIKE_MOVIE, payload: data });

  } catch (e) {
    dispatch({ type: UNLIKE_MOVIE, payload: e });
  }
};

export const fetchLikedMovies = () => async dispatch => {
  dispatch({ type: GET_LIKED_MOVIES, payload: true });
  try {
    const request = await axios.get('/api/movies/liked_movies');
    const { data } = request;
    dispatch({ type: GET_LIKED_MOVIES, payload: data });
  } catch (e) {
    dispatch({ type: GET_LIKED_MOVIES, payload: e });
  }
};