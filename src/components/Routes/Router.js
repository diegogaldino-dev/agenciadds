import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from '../pages/Home';
import CriacaoDeSites from "../pages/Criacao_de_sites";
import Contato from '../pages/Contato'
import QuemSomos from "../pages/QuemSomos"
import MidiaDigital from '../pages/Midia_digital'


// Navbar e Footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/criacao-de-sites" element={<CriacaoDeSites />} />   
          <Route exact path="/contato" element={<Contato />} />   
          <Route exact path="/quem-somos" element={<QuemSomos />} />  
          <Route exact path="/midia-digital" element={<MidiaDigital />} />   

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;