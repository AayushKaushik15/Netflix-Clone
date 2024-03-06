import React, { useEffect, useState } from 'react';
import logo from "../assets/netflix-logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { user_Avatar } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleGptSearch = () => {
    // toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, navigate]);

  return (
    <div className={`header ${isScrolled ? 'black' : ''}`}>
      <img className='main-logo' src={logo} alt="Netflix-logo.png" />

      {user &&
        <div className='signout-box'>
          <button className='search_button' onClick={handleGptSearch}>Search</button>
          <img className="right-logo" src={user_Avatar} alt="" />
          <p className='logOut' onClick={handleSignOut}>Sign out</p>
        </div>
      }
    </div>
  );
}

export default Header;
