import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from '../pages/Home';
import CriacaoDeSites from "../pages/Criacao_de_sites";


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

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;