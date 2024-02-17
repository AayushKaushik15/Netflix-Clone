import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [isSignInForm, setIsSignFrom] = useState(true);
  const [messageStore, setMessage] = useState(null);
  
  function toggleSignInForm() {
    setIsSignFrom(!isSignInForm);
  }

  const password = useRef(null);
  const email = useRef(null);
  // const displayName = useRef(null);

  function clickHandler() {
    const passMessage = validation(
      email.current.value,
      password.current.value,
    );
    setMessage(passMessage);

    if (!isSignInForm) {
      //* Sign Up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setMessage("Account created")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setMessage(errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(
            "! User not found. Please sign up to create your account."
          );
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="login">
        <img
          className="login-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="login-form-main">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <div className="inputs">
            {!isSignInForm && (
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                required
              />
            )}
            <input
              ref={email}
              type="email"
              name=""
              id=""
              placeholder="Email address"
              required
            />
            <input
              ref={password}
              type="password"
              name=""
              id=""
              placeholder="password"
              required
            />
          </div>
          <p className="error">{messageStore}</p>
          <button onClick={clickHandler}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="or">OR</p>
          <p className="sign-in-code">Use a Sign-in code</p>
          <p className="forgot">Forgot password?</p>
          <div className="remember">
            <input type="checkbox" selected />
            <p>Remember me</p>
          </div>

          <div className="last-section-login">
            <p className="para-3">
              New to Netflix?{" "}
              <a href="#" onClick={toggleSignInForm}>
                {isSignInForm ? "sign up" : "sign in"} now
              </a>
            </p>
            <p className="para-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </form>
      </div>
      <footer>
        <p>Question? Call 000-800-919-1694</p>
        <div>
          <ul>
            <li>FAQ</li>
            <li>Terms of Use</li>
            <li>Cookies Preference</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Login;
