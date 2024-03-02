

import React, { useEffect } from 'react'
import logo from "../assets/netflix-logo.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser } from '../utils/userSlice';
import { user_Avatar } from '../utils/constant';

function Header() {

  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut () {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch (removeUser())
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    // unsubscribe when component
    return () => unsubscribe();
  }, []);

  return (
    <div className='header'>

      <img className='main-logo' src={logo} alt="Netflix-logo.png" />

      {user && 
        <div className='signout-box'>
          <img className="right-logo" src={user_Avatar} alt="" />
          <p className='logOut' onClick={handleSignOut}>Sign out</p>
        </div>
      }
    </div>
  )
}


export default Header