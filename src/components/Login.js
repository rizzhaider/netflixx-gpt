import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, PHOTO_URL } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setErrorMessage(null);
    if(!isSignForm) {
      name.current.value = null;
    }
    password.current.value = null;
    email.current.value = null;
    setIsSignForm(!isSignForm);
  }

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value, !isSignForm? name.current.value:null, isSignForm);
    setErrorMessage(message);
    if(message) return;
    if(!isSignForm){
      //signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: PHOTO_URL
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid, email, displayName, photoURL}));
        }).catch((error) => {
          // An error occurred
          // ...
        });
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    }else{
    //signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  
    //sign /signup
  }
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img
          src={BG_URL}
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {
          !isSignForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-900' />
        }
        <input ref={email}
          type='text' placeholder='Email or phone' className='p-4 my-4 w-full bg-gray-900' />
        <input ref={password}
          type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-900' />
        <p className='text-red-700 text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
          {isSignForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 text-gray-500'> {isSignForm ? 'New to Netflix ? ' : 'Already have an account ? '}
          <span className='text-white cursor-pointer' onClick={toggleSignInForm}>
            {isSignForm ? 'Sign Up Now' : 'Sign In Now'}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login