import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesGroup.css";

function MoviesGroup({ category = "Featured" }) {
  return (
    <div className="movieGroup">
      <h1>{category}</h1>
      <div className="movieGroup__collection">
        <MovieCard category={category} />
        <MovieCard category={category} />
        <MovieCard category={category} />
        <MovieCard category={category} />
      </div>
    </div>
  );
}

export default MoviesGroup;
