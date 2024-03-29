import React from 'react'
import Home from './page/Home'
import {Routes,Route} from "react-router-dom"
import Timer from './components/Timer'
import LandingPage from './page/LandingPage'
import Navbar from './components/Navbar'
import Displaymovie from './page/Displaymovie'
import OTPBoxes from './page/OTPBoxes'
import NestedComments from './page/NestedComments'
import InfiniteLoading from './page/InfiniteLoading'
function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dispalymovie" element={<Displaymovie/>}/>
        <Route path="/otp" element={<OTPBoxes/>}/>
        <Route path="/infinite" element={<InfiniteLoading/>}/>
        <Route path="/nestedcommet" element={<NestedComments/>}/>
        <Route path="/home" element={<>
        <Navbar/>
        <Home/>
        </>}/>
        <Route path="/timer" element={<Timer/>}/>
    </Routes>
  )
}

export default MainRoute