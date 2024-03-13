import React from "react";

const Movies = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="container">
            <div className="title">{movie.Title}</div>
            <div className="type">{movie.Type}</div>
            <div className="year">{movie.Year}</div>
          </div>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="over"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
