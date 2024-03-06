import React from 'react';
import { IMG_CDN } from '../utils/constant';
import { API_OPTIONS } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  return (
    <div className='movie_Card'>
      <img src={IMG_CDN + posterPath} alt="" />
    </div>
  )
}

export default MovieCard