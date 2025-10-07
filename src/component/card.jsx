import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-between gap-7 my-5 flex-wrap'>
    <div className='px-10 py-5 rounded-md flex-grow'style={{backgroundColor:"#8272DA"}}>
        <h3 className='font-medium text-2xl'>23</h3>
        <p>Coimbatore</p>
    </div>

    <div className='px-10 py-5 rounded-md flex-grow' style={{backgroundColor:"#FD6663"}}>
        <h3  className='font-medium text-2xl'>October 6</h3>
        <p>5:50</p>
    </div>

    <div className='px-10 py-5 rounded-md flex-grow' style={{backgroundColor:"#FCA201"}}>
        <h3  className='font-medium text-2xl'>Built Using</h3>
        <p>React</p>
    </div>
    </div>
  )
}

export default Card