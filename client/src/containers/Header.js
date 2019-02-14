import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../localStorage";
import MobileMenu from "./MobileMenu";
import NavbarItem from "../components/NavbarItem";
import Icon from "../components/icons/Index";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuItems: [
        { name: "Browse", redirect: "/browse" },
        { name: "Add", redirect: "/add" },
        { name: "Sign Up", redirect: "/signup" },
        { name: "Login", redirect: "/login" }
      ]
    };
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  handleMobileMenu() {
    this.setState({
      showMenu: true
    });
  }

  hideMobileMenu() {
    this.setState({
      showMenu: false
    });
  }

  render() {
    let navbar;
    let testNav;
    let signout;
    if (this.props.loggedIn) {
      const hidden = ["Sign Up", "Login"];
      signout = (
        <li key="navbar-item-signout" className="navbar-item">
          <Link
            to={"/login"}
            className="navbar-link"
            onClick={() => this.logOut()}
          >
            Sign out
          </Link>
        </li>
      );
      testNav = this.state.menuItems
        .filter(item => !hidden.includes(item.name))
        .map((item, index) => {
          return (
            <div key={index} onClick={() => this.hideMobileMenu()}>
              <NavbarItem
                link={`${item.redirect}`}
                name={item.name}
                keyValue={item.name}
              />
            </div>
          );
        });
    } else {
      testNav = this.state.menuItems.map((item, index) => {
        return (
          <div key={index} onClick={() => this.hideMobileMenu()}>
            <NavbarItem
              link={`${item.redirect}`}
              name={item.name}
              keyValue={item.name}
            />
          </div>
        );
      });
    }
    if (this.state.showMenu) {
      return (navbar = (
        <MobileMenu
          showMenu={() => this.hideMobileMenu()}
          options={{ testNav, signout }}
        />
      ));
    }
    navbar = (
      <div className="">
        <ul className="navbar-list flex list-reset items-center">
          <Link to="/">
            <Icon
              name="logo"
              className="fill-current text-green w-8 h-8 lg:w-12 lg:h-12 block"
            />
          </Link>
          <div className="hidden sm:flex mx-auto">
            {testNav}
            {signout}
          </div>
          <li
            key="icon-menu"
            className="navbar-item sm:invisible absolute pin-r pr-4"
            onClick={() => this.handleMobileMenu()}
          >
            <Icon
              name="menu"
              className="fill-current text-grey w-8 h-8 lg:w-12 lg:h-12 block"
            />
          </li>
        </ul>
      </div>
    );

    return (
      <nav className="max-w-full w-screen shadow flex fixed pin-t pin-x z-100 h-16 items-center bg-white">
        <div className="container mx-auto">{navbar}</div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
