import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../localStorage';

export class Header extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let signout;
    let signup;
    let login;
    if (this.props.loggedIn) {
        signout = (
          <li className='navbar-item'>
            <NavLink to={'/login'} className='navbar-link' activeClassName='navbarActive' onClick={() => this.logOut()}>Sign out</NavLink>
          </li>
        );
    } else {
        signup = (
          <li className='navbar-item'>
            <NavLink to={'/signup'} className='navbar-link' activeClassName='navbarActive'>Sign Up</NavLink>
          </li>
        )
        login = (
          <li className='navbar-item'>
            <NavLink to={'/login'} className='navbar-link' activeClassName='navbarActive'>Login</NavLink>
          </li>
        )
    }
    return (
        <nav className='navbar shadow'>            
          <div className=''>
            <ul className='navbar-list flex items-center justify-center list-reset'>
              {/* <li>
                <NavLink to='/logo' className='navbar-logo'>
                  <img src={require('../style/assets/3.png')} />
                </NavLink>
              </li> */}
              <li className='navbar-item'>
                <NavLink to='/' className='navbar-link'>Browse</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to={'/add'} className='navbar-link' activeClassName='navbarActive'>Add</NavLink>
              </li>
              {signout}
              {signup}
              {login}
              <li className='navbar-item'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="icon-menu fill-current text-green-900 inline-block h-8 w-8">
                  <path 
                    class="secondary" 
                    fill-rule="evenodd" 
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Header));