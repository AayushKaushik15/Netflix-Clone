import React, { useRef } from 'react';
import openai from "../utils/openai"
const GptSearchBar = () => {

    const searchText = useRef();
    const handleGptSearchClick = async () => {

        // make a api call to open ai GPT
        const query = "Act as a Movies Recommendation suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, coma seprated like the example result given ahead. Example result : Gadar, Don, Sholay, pursuit of the happiness";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices)
    }

  return (
    <div>
        <form className='searchBar' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" placeholder='Search here...'/>
            <button onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar