import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../localStorage';
import MobileMenu from './MobileMenu';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  handleMobileMenu() {
    this.setState({
      showMenu: true
    })
  }

  hideMobileMenu() {
    this.setState({
      showMenu: false
    })
  }

  render() {
    let signout;
    let signup;
    let login;
    let navbar;
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
    if (this.state.showMenu) {
      return navbar = (
        <MobileMenu showMenu={() => this.hideMobileMenu()}/>
      )
    } else {
      navbar = (           
        <div className=''>
          <ul className='navbar-list flex items-center justify-center list-reset'>
            <li className='navbar-item'>
              <NavLink to='/' className='navbar-link'>Browse</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to={'/add'} className='navbar-link' activeClassName='navbarActive'>Add</NavLink>
            </li>
            {signout}
            {signup}
            {login}
            <li className='navbar-item' onClick={() => this.handleMobileMenu()}>
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
      )
    }
    return (
        <nav className='navbar shadow'>            
          {/* <div className=''>
            <ul className='navbar-list flex items-center justify-center list-reset'>
              <li className='navbar-item'>
                <NavLink to='/' className='navbar-link'>Browse</NavLink>
              </li>
              <li className='navbar-item'>
                <NavLink to={'/add'} className='navbar-link' activeClassName='navbarActive'>Add</NavLink>
              </li>
              {signout}
              {signup}
              {login}
              <li className='navbar-item' onClick={() => this.handleMobileMenu()}>
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
          <MobileMenu showMenu={() => this.hideMobileMenu()}/> */}
          {navbar}
        </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Header));