import React from 'react';
import MovieCard from './MovieCard';
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const MovieList = ({ title, movies }) => {

  // Check if movies is null or undefined
  if (!movies) {
    return <div>No movies available</div>;
  }

  return (
    <div className="movies">
    <MdChevronLeft className="arrow_icons"/>
      <div className='movie_list_container'>
        <h1 className='title_list'>{title}</h1>
        <div className='movies' id={"slider"}>
          {/* Check if movies array is not empty before accessing its first element */}
          {movies && movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path}/>)}
        </div>
      </div>
      <MdChevronRight className="arrow_icons"/>
    </div>
  );
};

export default MovieList;
