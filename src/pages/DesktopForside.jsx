import React from "react";
import { Link } from "react-router-dom";
import KAFFE3 from "../assets/kaffe3.png";
import BANNER from "../assets/BANNER.png";
import kaffe1 from "../assets/kaffe.png";
import ProductCard from "../components/ProductCard"; // Importér ProductCard
import kaffe2 from "../assets/kaffe2.png";
import piccolaWhite2 from "../assets/piccola-white-2-scaled-2.jpg";
import SC45 from "../assets/SC45_3-1.png";

import "../App.css";


const DesktopForside = () => {
  return (
    <div className="desktop-forside">
      {/* Header */}

      {/* Banner */}
      <section className="banner" style={{ backgroundImage: `url(${BANNER})` }}>
  <div className="overlay" />
  <div className="banner-content">
    <h1>Kaffeklar - Smagsoplevelser til erhvervslivet</h1>
    <p>En del af redoffice konpap A/S</p>
  </div>
</section>

      {/* Kategorier */}
      <section className="categories">
      <div className="category">

    <div className="image-container">

      <img src={kaffe2} alt="Kaffeautomater" className="category-img2" />
      <Link to="/kategori">
      <div className="overlay"></div>
      </Link>
    </div>
    <p className="category-text">Kaffeautomater</p>
  </div>
  <div className="category">
    <div className="image-container">
      <img src={kaffe1} alt="Kaffe" className="category-img" />
    </div>
    <p className="category-text">Kaffe</p>
  </div>

  <div className="category">
    <div className="image-container">
      <img src={piccolaWhite2} alt="Drikkevandskøler" className="category-img2" />
      <div className="overlay2"></div>
    </div>
    <p className="category-text">Drikkevandskøler</p>
  </div>
</section>
<section className="stort-udvalg-af-kaffemaskiner">
  <h2>Stort udvalg af kaffemaskiner</h2>
</section>
      {/* Produkter */}

      <section className="products">
      <div className="products">
      <ProductCard
  image={SC45}
  altText="Crem SC45"
  title="Crem SC45 – Espressomaskine"
  description={`Op til 35 personer\nBrygtid: 30 sekunder\nSvensk kvalitet`}
  link="/produktside"
/>

<ProductCard
  image={kaffe2}
  altText="Café Elite III"
  title="Café Elite III – Instant kaffeautomat"
  description={`Op til 50 personer\nBrygtid: 7 sek\n3 ingrediensbeholdere\nSvensk leverandør`}
  link="/produktside"
/>

<ProductCard
  image={KAFFE3}
  altText="Cafélino Trio"
  title="Cafélino Trio – Instant kaffeautomat"
  description={`Op til 50 personer\nBrygtid: 10 sekunder\nInstant\nVelegnet i kantiner, frisører m.m`}
  link="/produktside"
/>
    </div>
</section>


    </div>
  );
};

export default DesktopForside;