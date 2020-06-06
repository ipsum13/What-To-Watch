import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LikeMovie, UnlikeMovie, fetchLikedMovies } from "../../actions/likedMovies";
import Spinner from "../Spinner/Spinner";
import { API_URL, API_KEY } from "../../api/Api";



import Cast from "../Cast/Cast";
import LikeButton from '../LikeButton/LikeButton';
import Recommendations from "../Recommendations/Recommendations";
import ResponsiveEmbed from "react-responsive-embed";

import {
  MovieWrapper,
  Background,
  MovieInfo,
  SidePanel,
  SideTitle,
  GenreTab,
  SideStat,
  MainContent,
  MainTitle,
  Rating,
  Score,
  Overview,
  Poster,
} from "./MovieDetail.styled";

const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
export const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      actors: null,
      directors: [],
      credits: {},
      trailer: {},
      recommendations: [],
      showRecommendationsCount: 6,
      loading: false,
      filmHearted: false,
    };
  }

  componentDidMount = async () => {
    if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${this.props.match.params.movieId}`)
      );
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos,recommendations`;
      this.fetchMovieData(endpoint);
    }
  }


  componentWillReceiveProps(newProps) {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/${newProps.match.params.movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos,recommendations`;
    this.fetchMovieData(endpoint);
  }

  fetchMovieData = async (endpoint) => {
    const {auth} = this.props;
    try {
      const res = await fetch(endpoint);
      const result = await res.json();

      const directors = result.credits.crew.filter(
        (member) => member.job === "Director"
      );

      const trailer = result.videos.results.filter(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      )[0];

      const liked =  auth && 
      ( auth.user.liked.length > 0 && auth.user.liked.some((movie) => {
       return movie === result.id;
     }))
      this.setState({
        movie: result,
        actors: result.cast,
        directors,
        credits: result.credits,
        trailer,
        recommendations: result.recommendations.results,
        showRecommendationsCount: 6,
        loading: false,
        filmHearted: liked
        
      });
      
    } catch (e) {
      console.log(e); 
    }
  };

  onSeeMoreRecommendations = () => {
    const { recommendations } = this.state;
    this.setState((prevState) => {
      if (prevState.showRecommendationsCount + 6 <= recommendations.length) {
        return {
          showRecommendationsCount: prevState.showRecommendationsCount + 6,
        };
      }
      return { showRecommendationsCount: recommendations.length };
    });
  };

  convertMoney = (money) => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  handleLikes = () => {
    const { LikeMovie } = this.props;
    const { movie } = this.state;
    LikeMovie({
      title: movie.title,
      movieId: movie.id,
      rating: movie.vote_average,
      poster: movie.poster_path,
      releaseDate: movie.release_date,
    });
    this.setState({filmHearted: true})
  };

  handleUnlikes = () => {
    const { UnlikeMovie } = this.props;
    const { movie } = this.state;
    UnlikeMovie(movie.id);
    this.setState({filmHearted: false})
  };

  render() {
    const {
      movie,
      actors,
      directors,
      loading,
      credits,
      trailer,
      recommendations,
      showRecommendationsCount,
    } = this.state;

    return (
      <MovieWrapper>
        {loading && <Spinner />}

        <Fragment>
          {!loading && this.state.movie ? (
            <Fragment>
              <Background
                backdrop={
                  Object.keys(movie).length &&
                  `${BACKDROP_PATH}${movie.backdrop_path}`
                }
              />
              <MovieInfo>
                <SidePanel>
                  <SideTitle>
                    <h1 data-testid="movie-title" style={{ display: "inline" }}>
                      {movie.title}
                    </h1>
                    <h4 data-testid="movie-tagline">{movie.tagline}</h4>
                  </SideTitle>
                  <Poster
                    data-testid="movie-poster"
                    src={
                      Object.keys(movie).length &&
                      `${POSTER_PATH}${movie.poster_path}`
                    }
                    alt={movie.title}
                  />
                  <div>
                    <LikeButton liked={this.state.filmHearted} onLikeClick={this.handleLikes} onUnlikeClick={this.handleUnlikes} />
                  </div>
                  <h3 style={{ marginTop: "1rem" }}>IMDB RATING</h3>
                  <Rating>
                    <meter
                      min="0"
                      max="100"
                      optimum="100"
                      low="40"
                      high="70"
                      value={movie.vote_average * 10}
                    />
                    <Score>{movie.vote_average}</Score>
                  </Rating>
                  <div>
                    {movie.genres &&
                      movie.genres.map((genre) => (
                        <GenreTab data-testid="movie-genre" key={genre.name}>
                          {genre.name}
                        </GenreTab>
                      ))}
                  </div>
                  <SideStat>
                    <span>Released:</span>
                    <h3 data-testid="movie-release-date">
                      {movie.release_date}
                    </h3>
                  </SideStat>

                  <SideStat>
                    {directors.length > 1 ? (
                      <span>DIRECTORS</span>
                    ) : (
                      <span>DIRECTOR</span>
                    )}{" "}
                    {directors.map((element, i) => {
                      return (
                        <h3 key={i} className="rmdb-director">
                          {element.name}
                        </h3>
                      );
                    })}
                  </SideStat>

                  <SideStat>
                    <span>Runtime:</span>
                    <h3 data-testid="movie-runtime">
                      {movie.runtime}
                      min
                    </h3>
                  </SideStat>

                  {movie.budget !== 0 && (
                    <SideStat>
                      <span>Budget:</span>
                      <h3 data-testid="movie-budget">
                        {this.convertMoney(movie.budget)}
                      </h3>
                    </SideStat>
                  )}

                  {movie.revenue !== 0 && (
                    <SideStat>
                      <span>Revenue:</span>
                      <h3 data-testid="movie-revenue">
                        {this.convertMoney(movie.revenue)}
                      </h3>
                    </SideStat>
                  )}
                </SidePanel>

                <MainContent>
                  <MainTitle>
                    <h1 data-testid="movie-title" style={{ display: "inline" }}>
                      {movie.title}
                    </h1>
                    <h4 data-testid="movie-tagline">{movie.tagline}</h4>
                  </MainTitle>
                  <Overview data-testid="movie-overview">
                    {movie.overview}
                  </Overview>
                  <Cast credits={credits} actors={actors} />
                  <div>
                    <h2 style={{ margin: "2.5rem 0 2rem", color: "#d3d3d3" }}>
                      Trailer
                    </h2>
                    {trailer && (
                      <ResponsiveEmbed
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                      />
                    )}
                  </div>

                  {recommendations.length && (
                    <Recommendations
                      recommendations={recommendations}
                      count={showRecommendationsCount}
                      setFilm={this.fetchMovieData}
                      onSeeMore={this.onSeeMoreRecommendations}
                    />
                  )}
                </MainContent>
              </MovieInfo>
            </Fragment>
          ) : null}
        </Fragment>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { LikeMovie, UnlikeMovie, fetchLikedMovies })(
  MovieDetail
);
