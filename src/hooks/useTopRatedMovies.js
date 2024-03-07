import { useDispatch } from "react-redux";
import {  addTopRatingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatingMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
