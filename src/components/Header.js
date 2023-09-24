import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
      naviagte('/error');
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email, displayName, photoURL}));
        naviagte('/browse');
      } else {
         // User is signed out
        dispatch(removeUser());
        naviagte('/');
       
      }
    });
    // unsubscribe when component unmount
    return () => {
      unSubscribe();
    }
  },[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img 
      className='w-44'
      src={LOGO} 
      alt="logo" />
     {user &&  <div className='flex items-center'>
        <img 
        className='w-8'
        src={user?.photoURL || USER_AVATAR} 
        alt="user-icon"/>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header