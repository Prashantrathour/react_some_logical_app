import React from 'react'

function Navbar() {
  return (
    <div className='p-0 m-0 fixed inset-0 z-100 '>
          <nav className="flex justify-between p-6 text-white items-center">
      <img className='w-[50px] h-[50px]' src="https://sgp1.digitaloceanspaces.com/svgfile/2021/07/Sunflower-Illustration-Black-White-Svg-FW210605HL91-800x800.png" alt="" />
        <div>
        <ul className="flex justify-between rounded-3xl gap-6 p-4 border backdrop-blur-sm bg-opacity-50">
      <li>Features</li>
      <li>How it works</li>
      <li>Testimonials FAQs</li>
      <li>FAQs</li>
    </ul>
        </div>
        <button className='p-4 border bg-black opacity-50 border-gray-700 hover:border-white font-semibold rounded-3xl'>Bool Call</button>
      </nav>
    </div>
  )
}

export default Navbar