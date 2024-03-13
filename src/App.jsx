import "./App.css";
import React, { useState, useEffect } from "react";
import Movies from "./component/Movies";
import Header from "./component/Header";
import SearchBox from "./component/SearchBox";
import Addfavourate from "./component/Addfavourate";
import Removefavourate from "./component/Removefavourate";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=92f493cf`;

    const response = await fetch(url);

    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourite(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addfavourateMovies = (movie) => {
    const newfavourateMovies = [...favourite, movie];
    setFavourite(newfavourateMovies);
    saveToLocalStorage(newfavourateMovies);
  };

  const removeFavourateMovies = (movie) => {
    const newfavourateList = favourite.filter(
      (favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourite(newfavourateList);
    saveToLocalStorage(newfavourateList);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <Header heading="MoviesBox" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="film">
          <Movies
            movies={movies}
            handleFavouritesClick={addfavourateMovies}
            favouriteComponent={Addfavourate}
          />
        </div>
      </div>
      {/* <div className="fave">
        <Header heading="Favourites" />
      </div>
      <div className="film">
        <Movies
          movies={favourite}
          handleFavouritesClick={removeFavourateMovies}
          favouriteComponent={Removefavourate}
        />
      </div> */}
    </>
  );
}

export default App;
