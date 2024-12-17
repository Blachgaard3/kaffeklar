import React from "react";
import banner3 from "../assets/banner3.jpg"; 
import { Link } from "react-router-dom";
const ServiceCard = ({ title, price, features, isHighlighted }) => {
  return (
    <div className={`service-card ${isHighlighted ? "highlighted" : ""}`}>
      <h2 className="service-title">{title}</h2>
      <p className="service-subtitle">Ekskl. reservedele</p>
      <h3 className="service-price">{price}</h3>
      <p className="service-annual">Årligt</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to="/"  className="service-button">Vælg Aftale</Link>
    </div>
  );
};

const DesktopService = () => {
  const services = [
    {
      title: "Service 1",
      price: "DKK3,995",
      features: [
        "1x årligt grundig rengøring",
        "1x årligt BWT filterskift",
        "1x årligt serviceeftersyn på maskinen",
        "Ekskl. reservedele",
        "Fri support inkl. kørsel og tekniker løn (alle hverdage)",
        "Ekskl. rengøring",
        "Inkl. kalkfilter ved køb",
      ],
      isHighlighted: false,
    },
    {
      title: "Service 2",
      price: "DKK3,995",
      features: [
        "1x årligt grundig rengøring",
        "1x årligt BWT filterskift",
        "1x årligt serviceeftersyn på maskinen",
        "Ekskl. reservedele",
        "Fri support inkl. kørsel og tekniker løn (alle hverdage)",
        "Ekskl. rengøring",
        "Inkl. kalkfilter ved køb",
      ],
      isHighlighted: true, // Midterste kort er fremhævet
    },
    {
      title: "Service 3",
      price: "DKK3,995",
      features: [
        "1x årligt grundig rengøring",
        "1x årligt BWT filterskift",
        "1x årligt serviceeftersyn på maskinen",
        "Ekskl. reservedele",
        "Fri support inkl. kørsel og tekniker løn (alle hverdage)",
        "Ekskl. rengøring",
        "Inkl. kalkfilter ved køb",
      ],
      isHighlighted: false,
    },
  ];
  return (
    <div>
      {/* Title Banner */}
      <section
        className="title-banner"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <h2 className="title-text">Serviceaftale</h2>
      </section>
      <main className="content">
      <div className="service-container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          price={service.price}
          features={service.features}
          isHighlighted={service.isHighlighted}
        />
      ))}
    </div>
      </main>

    </div>
  );
};

export default DesktopService;