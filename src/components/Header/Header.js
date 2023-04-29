import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center '>
                <h2 className='header-title '>may the force be with you...</h2><br />
            <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header