import React, { useState } from 'react'
import AddtodoForm from './AddtodoForm'
import TodoList from './TodoList'


const Todocontainer = () => {
        const [activityArr,setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id:2,
            activity: "Have a BreakFast"
        },
        {
            id:3,
            activity: "Take a Shower"
        }
    ])
    return (
        
        <div>
            <div className='flex gap-5 flex-wrap'>
              <AddtodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
              <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>  
            </div>
        </div>
        
    )
}

export default Todocontainer