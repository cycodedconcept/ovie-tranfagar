import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Navbar, Footer } from "../Component";
import { Home, About, Contact, Api, Services, TwoLines, Movement, Articles } from "../pages";
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
        <Services />
        <TwoLines />
        <Movement />
        <Articles />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Display;
