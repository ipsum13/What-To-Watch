import React, { Component, Fragment } from "react";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";
import LoadMore from "../LoadMore/LoadMore";
import { MovieGrid } from "./Home.styled";
import "./Home.css";

import ReactStars from "react-stars";

import SearchBar from "../SearchBar/SearchBar";

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../api/Api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nowPlaying: [],
      heroImage: null,
      loading: false,
      currentPage: 0,
      totalPages: 0,
      searchItem: "",
      movieId: "",
      movieUrl: "",
      movieName: "",
      movieVote: "",
      movieGenre: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
    const nowPlaying = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2020-01-15&primary_release_date.lte=2020-03-15`;
    this.fetchItems(endpoint);
    this.fetchNowPlaying(nowPlaying);
  }

  loadMoreMovies = () => {
    let endpoint = "";

    this.setState({
      loading: true,
    });

    if (this.state.searchItem === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        this.state.currentPage + 1
      }`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${
        this.state.searchItem
      }$page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  searchMovies = (searchItem) => {
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchItem,
    });

    if (searchItem === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchItem}`;
    }
    this.fetchItems(endpoint);
  };

  searchResult = (movie) => {
    if (movie[0]) {
      this.setState({
        movieId: movie[0].id,
        movieUrl: movie[0].avatar_url,
        movieName: movie[0].login,
        movieYear: movie[0].year,
        movieVote: movie[0].vote,
      });
    }
  };

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        });
      });
  };

  fetchNowPlaying = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          nowPlaying: [...this.state.nowPlaying, ...res.results],
        });
      });
  };

  render() {
    return (
      <Fragment>
      <div className="rmdb-home">
        <div>
          <MovieCarousel
            type="search"
            tagColor="#ff4f00"
            title="Trending"
            data={this.state.nowPlaying}
          />
        </div>
      
        {this.state.nowPlaying.length > 0 &&
        <Fragment>
        <SearchBar searchResult={this.searchResult} />
      
        <div className="rmdb-home-grid">
          <div className="rmdb-grid">
            {this.state.movieId ? (
              <div>
                <h1>Search Result</h1>

                <MovieCard
                  key={this.state.movieId}
                  clickable={true}
                  carousel={false}
                  searchImage={true}
                  image={
                    this.state.movieUrl
                      ? this.state.movieUrl
                      : "./images/no_image.jpg"
                  }
                  movieId={this.state.movieId}
                  movieName={this.state.movieName}
                >
                  <h3 data-testid="movieposter-title">
                    {this.state.movieName}
                  </h3>
                  <h5 data-testid="movieposter-year">
                    {this.state.movieYear.split("-")[0]}
                  </h5>
                  <ReactStars
                    count={5}
                    value={this.state.movieVote / 2}
                    size={24}
                    color2="#0275d8"
                    edit={false}
                  />
                </MovieCard>
              </div>
            ) : (
              <div>
                <h1>Popular Movies</h1>
                <MovieGrid>
                  {this.state.movies.map((element, i) => (
                    <MovieCard
                      key={i}
                      searchImage={false}
                      clickable={true}
                      carousel={false}
                      image={
                        element.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                          : "./images/no_image.jpg"
                      }
                      movieId={element.id}
                      movieName={element.original_title}
                      year={element.release_date}
                    ></MovieCard>
                  ))}
                </MovieGrid>
                {this.state.loading ? <Spinner /> : null}

                {this.state.currentPage <= this.state.totalPages &&
                !this.state.loading ? (
                  <LoadMore text="Load More" onClick={this.loadMoreMovies} />
                ) : null}
              </div>
            )}
          </div>
        </div>
        </Fragment>
        }
      </div>
      </Fragment>
    );
  }
}



export default Home;
