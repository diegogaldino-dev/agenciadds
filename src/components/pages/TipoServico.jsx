import React, { useEffect, useState } from "react";
import { StyledTipo } from "./style";

import Cards from "./Cards/Cards";

import Desen from "../../img/icons/19362653.jpg";
import social from "../../img/icons/3271883.jpg";
import marketing from "../../img/icons/5618169.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Tipo_servico = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Adicione o estado para controlar a exibição da descrição
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div style={{ margin: 0, width: "100%" }}>
      <StyledTipo>
        <div className="container mx-auto my-5">
          <div className="row">
            <div className="col-12">
              <h1
                className="text-center mt-5"
                data-aos="zoom-out-up"
                data-aos-duration="800"
              >
                Tipos Serviços
              </h1>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {/* Adicione eventos onMouseEnter e onMouseLeave */}
              <Cards
                name="Desenvolvimento de Sites"
                image={Desen}
                alt=""
                description="Transforme sua presença online com um site profissional e responsivo. Oferecemos serviços de desenvolvimento de sites sob medida para atender às suas necessidades específicas. Além disso, também realizamos atualizações em websites existentes, garantindo que sua presença digital esteja sempre atualizada e otimizada."
                categoryLink="/criacao-de-sites"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                showDescription={showDescription}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Cards
                name="Marketing Digital"
                image={marketing}
                alt=""
                description="Potencialize sua marca online com estratégias de marketing digital personalizadas. Oferecemos soluções completas e inovadoras em SEO, mídias sociais, anúncios e muito mais para impulsionar seu negócio. Mantenha sua presença digital atualizada, otimizada, competitiva e impactante com nossos serviços especializados e eficientes."
                categoryLink="/marketing-digital"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                showDescription={showDescription}
              />
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Cards
                name="Social Media"
                image={social}
                alt=""
                description="Aumente sua visibilidade online com estratégias personalizadas e eficientes. Oferecemos soluções inovadoras em design, SEO, mídias sociais e mais para alavancar sua marca de forma impressionante. Atualize e otimize consistentemente e proativamente sua presença digital com nossos serviços especializados e profissionais."
                categoryLink="/social-midia"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                showDescription={showDescription}
              />
            </div>
          </div>
        </div>
      </StyledTipo>
    </div>
  );
};

export default Tipo_servico;
