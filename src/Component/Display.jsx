import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from "../pages/Contact";
import Api from "../pages/Api";
import Services from "../pages/Services";
import TwoLines from "../pages/TwoLines";
import { Carousel } from "bootstrap";

const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="api" element={<Api />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Home />
        <Services />
        <TwoLines />
        <Carousel />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Display;
