import { LIKE_MOVIE, UNLIKE_MOVIE, GET_LIKED_MOVIES } from '../actions/types';

const initialState = {
  isFetching: false,
  movies: [],
  error: ''
};

const likedMovies = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_MOVIE:
      return {
        ...state,
        isFetching: action.payload
      };
    case GET_LIKED_MOVIES:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
        error: ''
      };
    case UNLIKE_MOVIE:
      return {
        ...state,
        isFetching: false,
        movies: '',
        error: action.payload
      };
    default:
      return state;
  }
};

export default likedMovies;