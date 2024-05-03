import React from "react";
import "../css/header.css"
import Intro from "./Intro";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Header() {
  return (
    <header id="header" className="black-background">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <Link to="/"><img src="img/logo.png" alt="Logo" /></Link>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li ><Link to="/">Home</Link></li>

            <li><Link to="about">About</Link></li>
            {/* <li><a href="committee.html">Advisory Committee</a></li> */}
            {/* <li><a href="agenda">Agenda</a></li> */}
            <li><Link to="uploadfile">Upload</Link></li>
            {/* <li><a href="login">Login</a></li> */}
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;