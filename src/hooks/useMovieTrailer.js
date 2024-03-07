
import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
  
    const getMovieVideo = async () => {
      const response = await fetch (`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await response.json();
      const filterData = json.results.filter(video => video.type === "Trailer" || "Clip")
      const trailer = filterData.length  ? filterData[0] : json.result[0];
      dispatch(addTrailerVideo(trailer?.key))
    }
  
  
    useEffect(() => {
      getMovieVideo();
    }, [])
}

export default useMovieTrailer