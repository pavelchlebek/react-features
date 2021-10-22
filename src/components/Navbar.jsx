import '../styles/Navbar.css';

import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/contacts">Contacts</a>
      </div>
    </div>
  )
}
