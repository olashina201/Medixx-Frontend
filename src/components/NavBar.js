import React from "react";
import "../assets/styles/header.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import NavData from "./NavItems";

function NavBar() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <h4>MEDIXX</h4>
              </a>
              <ul className="nav">
                {NavData.map((item) => <li><a href={item.path} className={item.className} >
                  { item.title }</a></li>)
              }
                <li><div className="main-blue-button"><a href="#contact">Get Started</a></div></li>
              </ul>
              <a className='menu-trigger'>
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
