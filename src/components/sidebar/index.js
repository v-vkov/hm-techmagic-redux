import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';


export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav>
      <NavLink to='/home' exact className="App-link" activeClassName="active">Products</NavLink>
      <NavLink to='/cart' className="App-link" activeClassName="active">Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;