import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import HeaderCart from '../../containers/header-cart';


const Header = (props) => {
  return (<div className="Header">
        <header className="Header-wrapper">
            <Link to='/' className="Header-title"><h1>My simple shop</h1></Link> 
            <HeaderCart/>
        </header>
  </div>);
};

export default Header;