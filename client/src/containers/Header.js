import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

export default class Header extends Component {
  render() {
    return (
        <nav className='navbar'>            
          <div className='container' style={styles}>
            <ul className='navbar-list'>
              <li className='navbar-item'>
                <Link to='/browse' className='navbar-link'>Browse</Link>
              </li>
              <li className='navbar-item'>
                {/* <a className='navbar-link' href=''>
                  <Icon name="logo" width={30}/>
                </a> */}
                <Link to='/add' className='navbar-link'>Add API</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/signup' className='navbar-link'>Sign Up</Link>
              </li>
              {/* <li className='navbar-item'>
                <a className='navbar-link' href=''>
                  <Icon name="menu" width={30}/>
                </a>
              </li> */}
              <li className='navbar-item'>
                <Link to='/login' className='navbar-link'>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
