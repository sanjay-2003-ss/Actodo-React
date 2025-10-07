import './App.css'
import Header from './component/Header'
import Card from './component/card'
import Todocontainer from './component/Todocontainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import { useState } from 'react'

function App() {
   const [user,setuser] = useState([
      {
         username : "Sanjay",
         password : "2003"
      }
   ])

  return (

    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
      <Route path='/Signup' element={<Signup user={user} setuser={setuser}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
