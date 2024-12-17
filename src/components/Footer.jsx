import React from "react";
import kaffeLogo from "../assets/Kaffe-logo.png"; // Sørg for, at stien passer
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Links */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
          <li><Link to="/kontakt">Kontakt</Link></li>
          <li><Link to="/handelsbetingelser">Handelsbetingelser</Link></li>
          </ul>
        </div>

        {/* Vi tilbyder */}
        <div className="footer-section">
          <h4>Vi tilbyder</h4>
          <ul>
            <li>Kaffeautomater</li>
            <li>Kaffe</li>
            <li>Drikkevandskølere</li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>
            <a href="mailto:kaffeklar@redofficekonpap.dk">
              kaffeklar@redofficekonpap.dk
            </a><br />
            Telefon: <a href="tel:+4524214970">+45 24 21 49 70</a><br />
            CVR: 73 19 44 15
          </p>
        </div>
      </div>

      {/* Logo og Bundtekst */}
      <div className="footer-bottom">
      <Link to="/">
  <img src={kaffeLogo} alt="Kaffeklar Logo" className="footer-logo" />
</Link>
        <p>
          © Alle rettigheder forbeholdes{" "}
          <a href="http://kaffeklar.dk/">Kaffeklar.dk</a> – 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;