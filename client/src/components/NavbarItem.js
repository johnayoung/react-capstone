import React from 'react'
import { NavLink } from "react-router-dom"; 

function NavbarItem(props) {
  return (
    <li key={props.keyValue} className='navbar-item'>
        <NavLink 
            to={props.link} 
            className='navbar-link' 
            // activeClassName='navbarActive'
        >
            {props.name}
        </NavLink>
    </li>
  )
}

export default NavbarItem

