import React, { Component, Fragment } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/Api";
import { Title, RecMovieGrid, SeeMoreContainer, SeeMoreButton } from './Recommendations.styled';

class Recommendations extends Component {
  render() {
    const { recommendations, count, onSeeMore } = this.props;
    const recMovies = recommendations.slice(0, count);
    let seeMoreButton = true;
    if (count === recommendations.length) seeMoreButton = false;

    return (
      <Fragment>
        <Title>Recommendations</Title>
        <RecMovieGrid>
          {recMovies.map((element, i) => (
            <MovieCard
              key={element.id} 
              carousel={false}
              clickable={true}
              searchImage={false}
              image={
                element.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                  : "./images/no_image.jpg"
              }
              movieId={element.id}
              movieName={element.original_title}
            />
          ))}
        </RecMovieGrid>
        {seeMoreButton && (
          <SeeMoreContainer>
            <SeeMoreButton onClick={onSeeMore}>See More</SeeMoreButton>
          </SeeMoreContainer>
        )}
      </Fragment>
    );
  }
}

export default Recommendations;
