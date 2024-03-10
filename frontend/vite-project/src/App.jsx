import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/Home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
