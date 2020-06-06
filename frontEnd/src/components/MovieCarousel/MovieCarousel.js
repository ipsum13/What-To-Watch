import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

//import Slider from "react-slick";

//import InfiniteCarousel from "react-leaf-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../../api/Api";

class MovieCarousel extends Component {
  render() {
    const { data } = this.props;
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
    };

    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((element) => (
          <div key={element.id}>
            <MovieCard
              key={element.id}
              clickable={true}
              carousel={true}
              searchImage={false}
              image={
                element.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                  : "./images/no_image.jpg"
              }
              movieId={element.id}
              movieName={element.original_title}
              year={element.release_date}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default MovieCarousel;
