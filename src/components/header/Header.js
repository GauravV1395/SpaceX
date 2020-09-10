import React from "react";

import NavBarItems from "./../breadcrumb/BreadCrumb";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">SpaceX</span>
      <NavBarItems />
    </nav>
  );
};

export default Header;
