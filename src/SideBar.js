import React, {Component} from 'react';
import './SideBar.css'
import home from './images/home-solid.svg';
import recipients from './images/avatar-solid.svg'
import users from './images/group-solid.svg'
import templates from './images/bookmark-solid.svg'
import settings from './images/settings-solid.svg'
import aoi from './images/map-marker-line.svg'
import distList from './images/folder-solid-badged.svg'
import anonUsers from './images/group-line.svg'

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar-menu">

        <div className="SideBar-item">
          <a src="#">
            <img src={home} alt=""/>Home
          </a>
        </div>

        <div className="SideBar-item">
          <a src="#">
            <img src={recipients} alt=""/>Recipients
          </a>

          <div className="SideBar-submenu">
            <div className="SideBar-subitem">
              <a src="#">
                <img src={users} alt=""/>Users
              </a>
            </div>

            <div className="SideBar-subitem">
              <a src="#">
                <img src={distList} alt=""/>Distribution Lists
              </a>
            </div>

            <div className="SideBar-subitem">
              <a src="#">
                <img src={anonUsers} alt=""/>Anonymous Users
              </a>
            </div>

            <div className="SideBar-subitem">
              <a src="#">
                <img src={aoi} alt=""/>Areas of Interest
              </a>
            </div>
          </div>

          <div className="SideBar-item">
            <a src="#">
              <img src={templates} alt=""/>Message Templates
            </a>
          </div>

          <div className="SideBar-item">
            <a src="#">
              <img src={settings} alt=""/>Admin
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default SideBar;