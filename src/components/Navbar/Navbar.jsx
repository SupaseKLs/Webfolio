import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='text-white h-16 font-medium w-11/12 mx-auto flex justify-between items-center'>
        <div>
           <ul className='flex'>
                <li className='px-2'><a href="#">Home</a></li>
                <li className='px-2'><a href="#">About us</a></li>
                <li className='px-2'><a href="#">Projects</a></li>
                <li className='px-2'><a href="#">Contact</a></li>
           </ul>
        </div>

        <div>
            <div>
                <h1 className='text-gray-600'>Hello,my name is</h1>
                <h1>Supasek Laobutsa</h1>
            </div>
        </div>

        <div>
            <h1>Resume</h1>
        </div>
    </nav>
  )
}

export default Navbar