import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignForm, setIsSignForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  }
  return (
    <div >
      <Header />
      <div  className='absolute'>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
      alt="logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignForm ? 'Sign In' : 'Sign Up'}
      </h1>
      {
        !isSignForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-900'/>
      }
      <input type='text' placeholder='Email or phone' className='p-4 my-4 w-full bg-gray-900'/>
      <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-900'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-md'>
        { isSignForm ? 'Sign In' : 'Sign Up'}
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