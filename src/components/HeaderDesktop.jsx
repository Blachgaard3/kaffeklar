import React from "react";
import logo from "../assets/Kaffe-logo.png";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import Chevrondown from "../assets/Chevrondown.png";
import { Link } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <>
      {/* Usynlig container til at skabe plads */}
      <div className="header-placeholder"></div>

      {/* Header */}
      <header className="header">
        <div className="top-bar">
          <p className="email">kaffeklar@redofficekonpap.dk</p>
          <Link to="/kontakt">
            <p className="contact">Kontakt</p>
          </Link>
        </div>
        <div className="header-content">
          <Link to="/">
            <img className="kaffe-logo" src={logo} alt="Kaffe Logo" />
          </Link>
          {/* Søgebar */}
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Søg..." />
            <img className="search-icon" src={searchIcon} alt="Search" />
          </div>

          {/* Gratis fragt */}
          <p className="gratis-fragt">
            Gratis fragt
            <br />
            <span className="bold">Ved køb over 599 kr.</span>
          </p>

          {/* Indkøbskurv */}
          <img className="cart-icon" src={cartIcon} alt="Cart" />
        </div>

        {/* Hovedmenu */}
        <nav className="main-menu">
          <p className="menu-item">
            <Link to="/kategori">Kaffeautomater/kaffe</Link>
            <img src={Chevrondown} alt="Dropdown" className="dropdown-icon" />
          </p>
          <p className="menu-item">Drikkevandskøler</p>
          <p className="menu-item">
            <Link to="/service">Serviceaftale</Link>
          </p>
        </nav>
      </header>
    </>
  );
};

export default HeaderDesktop;