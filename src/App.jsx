import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesktopForside from "./pages/DesktopForside";
import DesktopKategori from "./pages/DesktopKategori";
import DesktopService from "./pages/DesktopService";
import DesktopKontakt from "./pages/DesktopKontakt";
import DesktopProduktside from "./pages/DesktopProduktside";
import HeaderDesktop from "./components/HeaderDesktop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <HeaderDesktop />
      <Routes>
        <Route path="/" element={<DesktopForside />} />
        <Route path="/kategori" element={<DesktopKategori />} />
        <Route path="/service" element={<DesktopService />} />
        <Route path="/kontakt" element={<DesktopKontakt />} />
        <Route path="/produktside" element={<DesktopProduktside />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;