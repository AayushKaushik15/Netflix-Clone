import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='videoTitle'>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className='videoButtons'>
            <button className='btnOne'><FaPlay className='play icon'/> Play</button>
            <button className='btnTwo'><IoMdInformationCircleOutline className='info icon'/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle