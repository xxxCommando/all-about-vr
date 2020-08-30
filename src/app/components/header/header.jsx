import React from "react";
import NavBar from "../navbar/navbar";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <h3>Je suis dans le header</h3>
        <NavBar />
      </header>
    );
  }
}

export default Header;
