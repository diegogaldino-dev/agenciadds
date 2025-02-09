import React, { useEffect,} from "react";
import { StyledTipo } from "./style";

import Cards from "./Cards/Cards";

import Desen from "../../img/icons/19362653.jpg";
import social from "../../img/icons/3271883.jpg";
import marketing from "../../img/icons/5618169.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import useGoogleAnalytics from "../useGoogleAnalytics";

const Tipo_servico = () => {
  useGoogleAnalytics("G-RHJ8R95WMZ");
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section style={{ margin: 0, width: "100%" }}>
      <StyledTipo>
        <div className="container mx-auto my-5">
          {/* Título da seção */}
          <div className="row">
            <div className="col-12">
              <h1
                className="text-center mt-5"
                data-aos="zoom-out-up"
                aria-label="Tipos de serviços oferecidos pela nossa empresa"
              >
                Tipos de Serviços
              </h1>
            </div>
          </div>

          {/* Cartões de Serviços */}
          <div className="row">
            {/* Desenvolvimento de Sites */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              aria-label="Desenvolvimento de Sites"
            >
              <Cards
                name="Desenvolvimento de Sites"
                image={Desen}
                alt="Ilustração de desenvolvimento de sites"
                description="Transforme sua presença online com um site profissional e responsivo. Oferecemos serviços de desenvolvimento de sites sob medida para atender às suas necessidades específicas. Além disso, também realizamos atualizações em websites existentes, garantindo que sua presença digital esteja sempre atualizada e otimizada."
                categoryLink="/criacao-de-sites"
              />
            </div>

            {/* Marketing Digital */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              aria-label="Marketing Digital"
            >
              <Cards
                name="Marketing Digital"
                image={marketing}
                alt="Ilustração de marketing digital"
                description="Potencialize sua marca online com estratégias de marketing digital personalizadas. Oferecemos soluções completas e inovadoras em SEO, mídias sociais, anúncios e muito mais para impulsionar seu negócio. Mantenha sua presença digital atualizada, otimizada, competitiva e impactante com nossos serviços especializados e eficientes."
                categoryLink="/marketing-digital"
              />
            </div>

            {/* Social Media */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
              data-aos="fade-up"
              aria-label="Social Media"
            >
              <Cards
                name="Social Media"
                image={social}
                alt="Ilustração de social media"
                description="Aumente sua visibilidade online com estratégias personalizadas e eficientes. Oferecemos soluções inovadoras em design, SEO, mídias sociais e mais para alavancar sua marca de forma impressionante. Atualize e otimize consistentemente e proativamente sua presença digital com nossos serviços especializados e profissionais."
                categoryLink="/social-midia"
              />
            </div>
          </div>
        </div>
      </StyledTipo>
    </section>
  );
};

export default Tipo_servico;
