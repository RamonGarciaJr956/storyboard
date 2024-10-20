"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component, ReactElement } from 'react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';




const Page = () => {
  

  const [password, setPassword] = useState("")
  const [type, setType] = useState('password')


  const viewPassword = (e: MouseEvent) =>{
    e.preventDefault()
    if(type == 'password')
    {
      setType('text')
    }
    else if(type == 'text')
    {
      setType('password')
    }
    return
  }
  
  return (
    
<div className=" px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5ba8b8] to-[#FF6B6B] w-screen h-screen ">
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl text-gray-200 sm:text-3xl">Sign In</h1>

    <p className="mt-4 text-gray-200">
      Enter the email and password of the account you created
    </p>
  </div>

  <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">Email</label>

      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label htmlFor="password" className="sr-only">Password</label>

      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />
     
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
        <button onClick={(e) => viewPassword}>
          <FontAwesomeIcon icon={faEyeSlash} />
        </button>  
        
        </span>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-200">
        No account? 
        <a className="underline" href="#">Sign up</a>
      </p>
    
      <button type="submit" className="inline-block rounded-full px-5 py-3 text-sm font-medium text-black bg-white"> Sign in </button>

      <button
       type="submit" className="inline-block rounded-full px-5 py-3 text-sm font-medium text-black bg-white"
       >
        
        <FontAwesomeIcon icon={faGoogle}/>
        
       </button>
       <button
       type="submit" className="inline-block rounded-full px-5 py-3 text-sm font-medium text-black bg-white"
       >
        
        <FontAwesomeIcon icon={faDiscord}/>
       </button>

    </div>
  </form>
  </div>

</div>
  );
};

export default Page;
