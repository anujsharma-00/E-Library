import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 mx-8'>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-gray-800 hover:text-gray-950 text-2xl font-bold mr-10 cursor-pointer'>b00k Harbor <span className='font-semibold text-sm'>E- Library</span> </h1>
            </div>
            <div className='flex items-center space-x-4'>
                <a href="" className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700'>Log In</a>
                
                <a href="" className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700'>Create Account</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar