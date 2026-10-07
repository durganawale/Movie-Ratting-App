import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Data from "./Data/data";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie";
import MovieDetails from "./Component/MovieDetails";

function App() {
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    return savedMovies ? JSON.parse(savedMovies) : Data;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />

        <Route
          path="/add-movie"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MovieDetails movieList={movieList} setMovieList={setMovieList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
