import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

export class Header extends Component {
  render() {
    return (
        <nav className='navbar'>            
          <div className='container' style={styles}>
            <ul className='navbar-list'>
              {/* <li className='navbar-item'>
                <Link to='/browse' className='navbar-link'>Browse</Link>
              </li> */}
              <li className='navbar-item'>
                <Link to={'/add'} className='navbar-link'>Add</Link>
              </li>
              <li className='navbar-item'>
                <Link to={'/signup'} className='navbar-link'>Sign Up</Link>
              </li>
              <li className='navbar-item'>
                <Link to={'/login'} className='navbar-link'>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default withRouter(connect()(Header));