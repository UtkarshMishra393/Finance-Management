import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-yellow-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span><img src="https://cdn-icons-png.flaticon.com/512/3496/3496311.png" className="h-6 w-6 md:h-5 md:w-5 my-1 mx-2 rounded-md" alt="logo" /></span>
            <span className='text-yellow-500'>Finance</span>
            <span className='text-yellow-700'>Management</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-yellow-700 hover:text-blue-600'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-yellow-700 hover:text-blue-600'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover hover:border hover:border-yellow-700'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  )
}




















