import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = (props) => {

   const navigate = useNavigate()
   const [eusername,setEusername] = useState()
   const [epassword,setEpassword] = useState()
   const [ruser,setRuser] = useState(true)
  
   const user = props.user

   function checkUser()
   {
      let userfound = false
       user.forEach(function(item){
         if(item.username ===eusername && item.password === epassword)
         {
            console.log("Login Successfull");
            userfound = true
            navigate("/landing",{state:{user:eusername}})
         } 
       })
       if(userfound === false)
       {
         console.log("Login Failed")
         setRuser(false)
       }
   }

   function handleUIuser(evt)
   { 
       setEusername(evt.target.value)
   }

   function handleUIpass(evt)
   {
       setEpassword(evt.target.value)
   }

  return (
     <div className='bg-black p-10 text-start'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
         <h1>Hey Hi..</h1>
         {
            ruser ? <p>I help you manage your activities after you login :)</p> : <p className='text-red-600'>Please Sign up before you Login</p>
         }
      

         <div className='flex flex-col gap-2 my-2'>
            <input 
            type="text" 
            placeholder='Username'
            onChange={handleUIuser}
            className='w-52 border-black p-1 bg-transparent border rounded-md'/>

             <input 
            type="text" 
            placeholder='Password'
            onChange={handleUIpass}
            className='w-52 border-black p-1 bg-transparent border rounded-md'/>

            <button className='bg-[#8272DA] w-24 p-1 rounded-md ' onClick={checkUser}>
                Login
            </button>

            <p>Don't have an account? <Link to={"/Signup"} className="underline">Sign Up</Link></p>
 
         </div>
        </div>
    </div>
  )
}

export default Login