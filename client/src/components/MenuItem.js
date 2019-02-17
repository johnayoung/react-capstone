import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../localStorage';

export function MenuItem(props) {
  const {
    name,
    link,
    passedProps: { hideMobileMenu }
  } = props;
  const logout = () => {
    props.dispatch(clearAuth());
    clearAuthToken();
    hideMobileMenu();
  };
  return (
    <li className="navbar-item">
      <Link
        to={link}
        className="navbar-link"
        onClick={name === 'Sign Out' ? () => logout() : hideMobileMenu}
      >
        {name}
      </Link>
    </li>
  );
}

export default connect()(MenuItem);
