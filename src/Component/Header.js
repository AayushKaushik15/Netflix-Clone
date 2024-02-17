

import React, { useEffect } from 'react'
import logo from "../assets/netflix-logo.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser } from '../utils/userSlice';

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

    // unsubscribe when component unmounts;
    return () => unsubscribe();
  }, []);

  return (
    <div className='header'>

      <img className='main-logo' src={logo} alt="Netflix-logo.png" />

      {user && 
        <div className='signout-box'>
          <img className="right-logo" src="https://occ-0-2152-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e" alt="" />
          <p onClick={handleSignOut}>Sign out</p>
        </div>
      }
    </div>
  )
}


export default Header