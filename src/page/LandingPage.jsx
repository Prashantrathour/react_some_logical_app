import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='w-full'>
        <nav className='w-full p-4 bg-yellow-600'>
            <ul className='flex justify-between items-center text-center  w-full'>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'> <Link to={"/home"}>Assigment Landing Page</Link></li>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'><Link to={"/timer"}>Timer</Link></li>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'><Link to={"/otp"}>OTP BOXES</Link></li>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'><Link to={"/infinite"}>infinite scroll</Link></li>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'><Link to={"/dispalymovie"}>Display mobie(debounce)</Link></li>
                <li className='p-2 border shadow-2xl shadow-orange-700 rounded-full px-2 text-sm font-bold font-serif'><Link to={"/nestedcommet"}>Nested comments</Link></li>
            </ul>
        </nav>
       
        
    </div>
  )
}

export default LandingPage