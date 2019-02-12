import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../localStorage';
import MobileMenu from './MobileMenu';
import NavbarItem from '../components/NavbarItem';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuItems: [
        {name: 'Browse', redirect: '/'},
        {name: 'Add', redirect: '/add'},
        {name: 'Sign Up', redirect: '/signup'},
        {name: 'Login', redirect: '/login'}
      ]
    }
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  handleMobileMenu() {
    console.log('')
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
    let navbar;
    let testNav;
    let signout;
    if (this.props.loggedIn) {
      const hidden = ['Sign Up', 'Login'];
      signout = (
        <li className='navbar-item'>
            <Link to={'/login'} className='navbar-link' onClick={() => this.logOut()}>Sign out</Link>
        </li>
      );
      testNav = this.state.menuItems
        .filter(item => !(hidden.includes(item.name)))
        .map(item => {
          return (
            <div onClick={() => this.hideMobileMenu()}>
              <NavbarItem 
                link={`${item.redirect}`} 
                name={item.name}
              />
            </div>
          )
        });
    } else {
      testNav = this.state.menuItems
        .map(item => {
          return (
            <div onClick={() => this.hideMobileMenu()}>
            <NavbarItem 
              link={`${item.redirect}`} 
              name={item.name}
            />
            </div>
          )
        });
    }
    if (this.state.showMenu) {
      return navbar = (
        <MobileMenu showMenu={() => this.hideMobileMenu()} options={{testNav, signout}}/>
      )
    } else {
      navbar = (           
        <div className=''>
          <ul className='navbar-list flex items-center justify-center list-reset'>
            <div className='hidden sm:flex'>
              {testNav}
              {signout}
            </div>
            <li className='navbar-item lg:invisible absolute pin-r' onClick={() => this.handleMobileMenu()}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="icon-menu fill-current text-green-900 inline-block h-8 w-8">
                <path 
                  className="secondary" 
                  fill-rule="evenodd" 
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </li>
          </ul>
        </div>
      )
    }
    return (
        <nav className='max-w-full shadow flex fixed pin-t pin-x z-100 h-16 items-center bg-white'>
          {navbar}
        </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Header));