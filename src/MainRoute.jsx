import React from 'react'
import Home from './page/Home'
import {Routes,Route} from "react-router-dom"
import Timer from './components/Timer'
import LandingPage from './page/LandingPage'
import Navbar from './components/Navbar'
function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<>
        <Navbar/>
        <Home/>
        </>}/>
        <Route path="/timer" element={<Timer/>}/>
    </Routes>
  )
}

export default MainRoute