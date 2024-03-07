import { useDispatch } from "react-redux";
import {  addGenreMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from "react";

const useGenreMovies = () => {
  const dispatch = useDispatch();


  const genreMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addGenreMovies(json.results));
  };

  useEffect(() => {
    genreMovies();
  }, []);
};

export default useGenreMovies;
