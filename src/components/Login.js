import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignINForm]=useState(true)

    const toggleSignInForm = () =>{
        setIsSignINForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img
            src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt="BackgroundImg"
        />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60' >
            <h1 className='font-bold w text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
            {!isSignInForm && <input type="text" placeholder='Name' className='p-2 my-4 bg-gray-700 m-2 w-full'/>}
            <input type="text" placeholder='Email Address' className='p-2 my-4 bg-gray-700 m-2 w-full'/>
            <input type="password" placeholder='Password' className='p-2 my-4 bg-gray-700 m-2 w-full'/>
            <button className="p-2 m-2 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-6 ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Sign Up? then Sign In"}</p>
        </form>
    </div>
  )
}

export default Login    