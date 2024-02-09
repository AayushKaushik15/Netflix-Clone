import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='login'>
            <img className='login-img' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        </div>
        <div className='login-form-main'>
            <form className='login-form'>
                <h1>Sign In</h1>
                  <div className='inputs'>
                  <input type="email" name="" id="" placeholder='Email address' required/>
                  <input type="password" name="" id="" placeholder='password' required/>
                  </div>
                <button>Sign in</button>
                <p className='or'>OR</p>
                <p className='sign-in-code'>Use a Sign-in code</p>
                <p className='forgot'>Forgot password?</p>
               <div className='remember'>
                  <input type="checkbox" />
                  <p>Remember me</p>
               </div>

               <div className='last-section-login'>
                  <p className='para-3'>New to Netflix? <a href="#">Sign up now</a></p>
                  <p className='para-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
               </div>
            </form>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Login