
import "../App.css";
import React, { useState } from "react";
import logo from "../assets/Kaffe-logo.png";

const HeaderResponsive = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-responsive">
      {/* Logo */}
      <img className="kaffe-logo" src={logo} alt="Kaffe Logo" />

      {/* Burger Menu */}
      <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="responsive-menu">
          <p className="menu-item">Kaffeautomater/kaffe</p>
          <p className="menu-item">Drikkevandskøler</p>
          <p className="menu-item">Serviceaftale</p>
        </nav>
      )}
    </header>
  );
};

export default HeaderResponsive;