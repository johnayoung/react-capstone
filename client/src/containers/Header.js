import React, {Component} from 'react'
import Icon from '../components/icons/Index';

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
                <a className='navbar-link' href=''>
                  <Icon name="logo" width={30}/>
                </a>
              </li>
              <li className='navbar-item'>
                  <a className='navbar-link' href=''>Sign Up</a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href=''>
                  <Icon name="menu" width={30}/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
