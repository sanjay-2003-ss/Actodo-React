import React, { useState } from 'react'

const AddtodoForm = (props) => {
    const activityArr = props.activityArr
   const setActivityArr = props.setActivityArr

   const [newactivity,setNewactivity] = useState("")

   function handleChange (evt)
   {
         setNewactivity(evt.target.value)
   }
   function addElement ()
   {
      setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
     setNewactivity("")
   }
  return (
    <div>
              <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-medium'>Manage Activities</h1>
                <div>
                    <input value={newactivity} onChange={handleChange} type="text" className='bg-transparent border border-black p-1' placeholder='Next Activity ?' />
                    <button onClick={addElement} className='bg-black text-white p-1 border border-black' >Add</button>
                </div>
            </div>
    </div>
  )
}

export default AddtodoForm