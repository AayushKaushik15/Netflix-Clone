import React from 'react'
import GotMovieSuggestions from './GotMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <GptSearchBar/>
        <GotMovieSuggestions/>
    </div>
  )
}

export default GptSearch