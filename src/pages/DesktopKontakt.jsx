import React from "react";
import "../App.css";
import { Link } from "react-router-dom"; 

const DesktopKontakt = () => {
  return (
    <div className="kontakt-container">
      <div className="kontakt-card">
        <h2>Kontakt Os</h2>
        <form>
          <label htmlFor="navn">Navn</label>
          <input type="text" id="navn" placeholder="Dit navn" />

          <label htmlFor="efternavn">Efternavn</label>
          <input type="text" id="efternavn" placeholder="Dit efternavn" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Din email" />

          <label htmlFor="besked">Besked</label>
          <textarea id="besked" rows="4" placeholder="Din besked"></textarea>

          <Link to="/" className="btnk">
  Send Besked
</Link>
        </form>
      </div>
    </div>
  );
};

export default DesktopKontakt;