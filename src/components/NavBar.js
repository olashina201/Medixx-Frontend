import React, { useState } from "react";
import "../assets/styles/header.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavData from "./NavItems";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                <h4>MEDIXX</h4>
              </a>
              <ul className={ isOpen ? "nav" : "nav dis"}>
                {NavData.map((item) => <li><Link to={item.path} key={item.title}
                className={item.className} >
                  { item.title }</Link></li>)
              }
                <li><div className="main-blue-button"><Link to="/auth">Get Started</Link></div></li>
              </ul>
              <a className={ isOpen ? "menu-trigger active" : "menu-trigger" } onClick={toggle}>
                  <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
