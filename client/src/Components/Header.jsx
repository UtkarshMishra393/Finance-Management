import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='bg-yellow-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
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
            <li className='hidden sm:inline text-yellow-700 hover:text-blue-600'>
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}




















