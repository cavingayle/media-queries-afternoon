import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropdownVisible: false,
    };
  }

  toggleDropDown = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible,
    });
  };

  render() {
    const { dropdownVisible } = this.state;

    return (
      <div className="App">
        <div className="first-fold">
          <div className="header-wrap">
            <img
              id='logo'
              src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              alt="logo"
            />
            {!dropdownVisible && (
              <nav className="nav">
                <ul className="nav_links">
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )}

            <div className="mobile-menu" onClick={this.toggleDropDown}>
              Menu
            </div>
            {dropdownVisible && (
              <nav className="mobile-nav">
                <ul className="nav_links">
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )}
          </div>
          <div className="content-wrap">
            <div className="subheading">Welcome To Our Studio!</div>
            <div className="subheading-text">IT'S NICE TO MEET YOU</div>
            <button>TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
