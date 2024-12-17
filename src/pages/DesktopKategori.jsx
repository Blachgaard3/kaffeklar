import React from "react";
import banner2 from "../assets/banner2.jpg"; 
import ProductCard from "../components/ProductCard";
import KAFFE3 from "../assets/kaffe3.png";
import SC45 from "../assets/SC45_3-1.png";
import kaffe2 from "../assets/kaffe2.png";

const products = [
  {
    image: SC45,
    altText: "Crem SC45",
    title: "Crem SC45 – Espressomaskine",
    description: `Op til 35 personer\nBrygtid: 30 sekunder\nSvensk kvalitet`,
    link: "/produktside",
  },
  {
    image: kaffe2,
    altText: "Café Elite III",
    title: "Café Elite III – Instant kaffeautomat",
    description: `Op til 50 personer\nBrygtid: 7 sek\n3 ingrediensbeholdere\nSvensk leverandør`,
    link: "/produktside",
  },
  {
    image: KAFFE3,
    altText: "Cafélino Trio",
    title: "Cafélino Trio – Instant kaffeautomat",
    description: `Op til 50 personer\nBrygtid: 10 sekunder\nInstant\nVelegnet i kantiner, frisører m.m.`,
    link: "/produktside",
  },
];

const DesktopKategori = () => {
  return (
    <div>
      {/* Title Banner */}
      <section
        className="title-banner"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <h2 className="title-text">Kaffemaskiner</h2>
      </section>

      {/* Main Content */}
      <main className="content-kategori">
      <div className="filter-box">
          <h3>Filtrér produkter</h3>
          <label>
            <input type="checkbox" /> Espressomaskiner
          </label>
          <label>
            <input type="checkbox" /> Instant kaffeautomater
          </label>
          <label>
            <input type="checkbox" /> Drikkevandskølere
          </label>
        </div>

        <div className="products-container">
          {Array.from({ length: 3 }).map((_, index) => (
            <section key={index} className="products">
              {products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.image}
                  altText={product.altText}
                  title={product.title}
                  description={product.description}
                  link={product.link}
                />
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DesktopKategori;