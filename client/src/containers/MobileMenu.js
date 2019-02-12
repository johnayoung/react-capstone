import React, { Component } from 'react'
import Icon from '../components/icons/Index';

export default class MobileMenu extends Component {
  render() {
    return (
        <div className='fixed h-screen w-screen pin-t pin-l bg-green-darkest'>
        <Icon onClick={this.props.showMenu} name='close' className='absolute pin-r icon-close fill-current text-green-100 h-24 w-24' />
        <div className='mx-auto h-full flex flex-col items-center justify-center flex-grow text-center'>
            <ul className='list-reset text-4xl'>
                {this.props.options.testNav}
                {this.props.options.signout}
            </ul>
        </div>
      </div>
    )
  }
}
