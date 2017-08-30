import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App loggedIn">
          <NavBar/>
          <SideBar/>
          <Home/>
        </div>
        <div className="loggedOut">
        </div>
      </div>
    );
  }
}

export default App;
