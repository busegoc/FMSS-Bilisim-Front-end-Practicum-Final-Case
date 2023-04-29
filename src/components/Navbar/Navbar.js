import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../images/logo (2).png";

const Navbar = () => {
  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "sitelogo" />
          </Link>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar