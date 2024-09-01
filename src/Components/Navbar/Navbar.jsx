import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../../Data';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [bg, setBg] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state based on screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div  className={`navbar ${bg ? 'bg' : ''}`}>
      {/* logo */}
      <div className="logo">
        <img src={assets.logoBgNo} alt="Logo" />
      </div>
      {/* Items in the navbar */}
      <ul className={`nav-items ${active ? 'active' : ''}`}>
        <Link className={`link `} onClick={() => setActive(false)} to="/">
          Home
        </Link>
        <Link className={`link`} onClick={() => setActive(false)} to="/about">
          About
        </Link>
        <Link className={`link `} onClick={() => setActive(false)} to="/products">
          Products
        </Link>
        <Link className={`link`} onClick={() => setActive(false)} to="/contact">
          Contact
        </Link>
        <img
          onClick={() => setActive(false)}
          src={assets.cross_icon}
          alt="Close Menu"
          className="menu-cancel"
        />
      </ul>
      {/* Make an order button */}
      <div className="order-btn btn">
        <Link className="nav-btn" to="/products">
          {change ? <img src={assets.cart_icon} alt="Cart Icon" /> : 'Buy Items'}
        </Link>
      </div>
      <div onClick={() => setActive(true)} className="menu-icon">
        <img src={assets.menu_icon} alt="Open Menu" />
      </div>
    </div>
  );
};

export default Navbar;