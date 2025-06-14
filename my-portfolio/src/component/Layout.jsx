// Layout.js
import React from 'react';


import './Layout.css';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
     
    </div>
  );
};

export default Layout;
