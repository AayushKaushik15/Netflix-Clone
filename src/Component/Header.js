

import React from 'react'
import logo from "../assets/netflix-logo.png"

function Header() {
  return (
    <div className='header'>
      <img className='main-logo' src={logo} alt="Netflix-logo.png" />
    </div>
  )
}


export default Header