import React, { Component } from 'react'

export default class MobileMenu extends Component {
  render() {
      const background = { 
          image: {
              backgroundImage: `url(${require("../style/assets/cool-background.png")})`,
              height: '100vh',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
          },
          color: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white'
          }
        }
    return (
      <div style={ background.image } className='mobileMenu h-screen bg-grey-darkest bg-cover'>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            onClick={this.props.showMenu}
            className="absolute pin-r icon-close fill-current text-green-100 h-24 w-24">
            <path 
                className="secondary" 
                fillRule="evenodd" 
                d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/>
        </svg>
        <div style={background.color} className='container mx-auto  h-full flex flex-col items-center justify-center flex-grow text-center'>
            <ul className='list-reset text-4xl text-white'>
                {this.props.options.testNav}
                {this.props.options.signout}
            </ul>
            {/* <div className='absolute pin-b p-6 text-3xl'>
                <button className='btn btn-outline m-2'>Login</button>
                <button className='btn btn-green m-2'>Sign Up</button>
            </div> */}
        </div>
      </div>
    )
  }
}
