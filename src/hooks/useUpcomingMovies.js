import { useDispatch } from "react-redux";
import {  addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from '../utils/constant'
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    upComing();
  }, []);
};

export default useUpcomingMovies;
