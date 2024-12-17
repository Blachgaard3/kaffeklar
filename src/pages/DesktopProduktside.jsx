import React from "react";
import "../App.css"; // Styling
import productImage from "../assets/kaffe2.png"; // Dit produktbillede
import { Link } from "react-router-dom";

const DesktopProduktside = () => {
  return (
    
    <div className="product-page">

      {/* Venstre sektion */}
      <div className="left-section">
        <div className="product-image">
          <img src={productImage} alt="Café Elite III – Instant kaffeautomat" />
        </div>
        <div className="product-info">
        <h2>Mere info</h2>
        <ul>
  <li>Automatisk vandpåfyldning</li>
  <li>Fem liters vandtank</li>
  <li>To blandesystemer</li>
  <li>3 ingrediensbeholdere</li>
  <li>Programmerbar energisparetilstand</li>
  <li>Mulighed for kandebryg med Crem special termokande 1,2L</li>
  <li>Drypbakke med føler</li>
  <li>Kopbelysning</li>
  <li>Oplyst display med justerbart lys</li>
  <li>Separat varmtvandsudtag</li>
  <li>Mulighed for betalingsløsning (Tilkøb)</li>
  <li>
    Kapacitet beholdere:
    <ul>
      <li>Kaffe: 1,17kg/5,3L = ca. 580 kopper</li>
      <li>Topping/mælkepulver: 1,5kg/2,7L = ca. 185 kopper</li>
      <li>Chokolade/kakao: 2,0kg/2,7L = ca. 110 kopper</li>
    </ul>
  </li>
  <li>Strøm: 230V – 2200W</li>
  <li>Dimensioner: H: 735 x B: 515 x D: 310 mm</li>
</ul>
      </div>
      </div>

      {/* Højre sektion */}
      <div className="right-section">
        
      <div className="product-details">
          <h1>Café Elite III – Instant kaffeautomat</h1>
          <ul>
            <li>Op til 50 personer</li>
            <li>Brygtid: 7 sek</li>
            <li>3 ingrediensbeholdere</li>
            <li>Svensk leverandør</li>
          </ul>

        </div>
        <h3>Køb eller lej</h3>
        <div className="price-boxes">
          <div className="price-box">
            <p>Lejepris pr. md.</p>
            <span>328,00 DKK</span>
          </div>
          <div className="price-box">
            <p>Kontantpris</p>
            <span>15.995,00 DKK</span>
            
          </div>
        </div>

        {/* Dropdowns */}
        <div className="options-container">
          <label htmlFor="service">Service aftale</label>
          <select id="service">
            <option value="nej">Nej</option>
            <option value="ja">Ja (+1.000 DKK)</option>
          </select>

          <label htmlFor="delivery">Levering & Montering</label>
          <select id="delivery">
            <option value="ja">Ja (+3.000,00 DKK)</option>
            <option value="nej">Nej</option>
          </select>
          <Link to="/" className="btn-primary">Læg i kurv</Link>

        </div>
      </div>
    </div>
  );
};

export default DesktopProduktside;