import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='secondary-container'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.addTopRatingMovies}/>
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.addUpComingMovies}/>
      <MovieList title={"Genres"} movies={movies.addGenreMovies}/>
    </div>
  )
}

export default SecondaryContainer