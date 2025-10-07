import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Signup = (props) => {

  const user = props.user
  const setuser = props.setuser

  const navigate = useNavigate()
  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()

  function handleUIuser(evt) {
    setEusername(evt.target.value)
  }

  function handleUIpass(evt) {
    setEpassword(evt.target.value)
  }

  function addUser()
  {
     setuser([...user,{username:eusername,password:epassword}])
     navigate("/")
  }

  return (
    <div className='bg-black p-10 text-start'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <h1>Hey Hi..</h1>
        <p>Sign Up here :)</p>

        <div className='flex flex-col gap-2 my-2'>
          <input
            type="text"
            placeholder='Username'
            onChange={handleUIuser}
            className='w-52 border-black p-1 bg-transparent border rounded-md' />

          <input
            type="text"
            placeholder='Password'
            onChange={handleUIpass}
            className='w-52 border-black p-1 bg-transparent border rounded-md' />

          <input
            type="text"
            placeholder='Confirm Password'
            className='w-52 border-black p-1 bg-transparent border rounded-md' />

          <button className='bg-[#Fca201] w-24 p-1 rounded-md'onClick={addUser}>
            Sign Up
          </button>

          <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>

        </div>
      </div>
    </div>
  )
}

export default Signup