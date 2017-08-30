import React, { Component } from 'react';
import './NavBar.css'
import logo from './images/logo.png';
import help from './images/help-info-line.svg'
import logout from './images/power-line.svg'

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavBar-header">
                  <a href="#">
                    <img src={logo} className="NavBar-logo" alt="logo"/>
                  </a>
                  <div className="NavBar-controls">
                    <a href="http://www.singlewire.com/help/fusion/cucm/index.htm">
                      <img src={help} id="NavBar-help" alt="help"/>
                    </a>
                    <a href="#">
                      <img src={logout} id="NavBar-logout" alt="logout"/>
                    </a>
                  </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
