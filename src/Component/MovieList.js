import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Check if movies is null or undefined
  if (!movies) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <div className='movie_list_container'>
        <h1 className='title_list'>{title}</h1>
        <div className='movies'>
          {/* Check if movies array is not empty before accessing its first element */}
          {movies && movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path}/>)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
