import React from 'react'
import Card from '../component/card'
import Header from '../component/Header'
import Todocontainer from '../component/Todocontainer'
import { useLocation } from 'react-router-dom'
const Landing = () => {
    const data = useLocation()
    console.log(data.state.user);
    
  return (
    
    <>
     <div className='bg-black p-16  text-start rounded-md shadow-md'>
        <div className='bg-[#efefef] p-10 border rounded-md'>
              <Header username={data.state.user}/>
              <Card/>
              <Todocontainer/>
        </div>
        </div>

    
    </>
  )
}

export default Landing