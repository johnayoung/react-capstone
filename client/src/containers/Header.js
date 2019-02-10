import React, {Component} from 'react'
import Icon from '../components/icons/Index';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../localStorage';

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

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
            <Link to={'/login'} className='navbar-link' onClick={() => this.logOut()}>Sign out</Link>
          </li>
        );
    } else {
        signup = (
          <li className='navbar-item'>
            <Link to={'/signup'} className='navbar-link'>Sign Up</Link>
          </li>
        )
        login = (
          <li className='navbar-item'>
            <Link to={'/login'} className='navbar-link'>Login</Link>
          </li>
        )
    }
    return (
        <nav className='navbar'>            
          <div className='container' style={styles}>
            <ul className='navbar-list flex list-reset p-6'>
              <li className='navbar-item'>
                <Link to='/' className='navbar-link'>Browse</Link>
              </li>
              <li className='navbar-item'>
                <Link to={'/add'} className='navbar-link'>Add</Link>
              </li>
              {signout}
              {signup}
              {login}
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