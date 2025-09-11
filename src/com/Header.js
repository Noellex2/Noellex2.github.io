import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Little Moon</Link>
      <Link to="/food" className="btn">อาหาร</Link>
      <Link to="/drink" className="btn">เครื่องดื่ม</Link>
      <Link to="/snacks" className="btn">ขนม</Link>
    
    </header>
  );
}

export default Header;
