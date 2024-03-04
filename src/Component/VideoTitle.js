import React from 'react'
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='videoTitle'>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className='videoButtons'>
            <button className='btnOne'>Play</button>
            <button className='btnTwo'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle