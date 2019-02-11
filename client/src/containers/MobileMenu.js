import React, { Component } from 'react'

export default class MobileMenu extends Component {
  render() {
    return (
      <div className='mobileMenu h-screen'>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="absolute pin-r icon-close fill-current text-green-900 h-16 w-16">
            <path 
                class="secondary" 
                fill-rule="evenodd" 
                d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/>
        </svg>
        <div className='container mx-auto  h-full flex flex-col items-center justify-center text-4xl flex-grow text-center'>
            <ul className='list-reset'>
                <li className=''>
                    Browse
                </li >
                <li className=''>
                    Add
                </li>
                <li className=''>
                    <button className='m-2 border border-green-900 bg-white hover:bg-green-900 text-green-900 hover:text-white py-2 px-4 rounded'>Login</button>
                </li>
                <li className=''>
                    <button className='m-2 border border-green-900 bg-green-500 hover:bg-green-900 text-white py-2 px-4 rounded'>Sign Up</button>
                </li>
            </ul>
        </div>
      </div>
    )
  }
}
