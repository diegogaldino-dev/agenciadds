import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importe todos os outros componentes de página
import Home from "../pages/Home";
import CriacaoDeSites from "../pages/Criacao_de_sites";
import Contato from "../pages/Contato";
import QuemSomos from "../pages/QuemSomos";
import SocialMedia from "../pages/SocialMedia";
import MarketingDigital from "../pages/MarketingDigital";
import WhatsAppButton from "../pages/WhatsAppButton";
import TipoServico from "../pages/TipoServico";
import NotFound from "../pages/NotFound"; // Importe o componente NotFound

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
          <Route exact path="/social-midia" element={<SocialMedia />} />
          <Route exact path="/marketing-digital" element={<MarketingDigital />} />
          <Route exact path="/tipo-servico" element={<TipoServico />} />

          {/* Rota para a página NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
