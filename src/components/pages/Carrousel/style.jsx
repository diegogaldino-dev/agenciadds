import styled from "styled-components";

export const ImagemCarrousel = styled.img`
  width: 100%; /* Garante que a imagem ocupe toda a largura do container */
  height: auto; /* Mantém a proporção original da imagem */
  max-height: 600px; /* Altura máxima para desktop */

  /* Ajustes para telas médias (tablets) */
  @media (max-width: 768px) {
    max-height: 400px; /* Reduz a altura máxima */
  }

  /* Ajustes para telas pequenas (celulares) */
  @media (max-width: 576px) {
    max-height: 550px;
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    max-height: 750px; 
  }
`;

export const CarouselCaption = styled.div`
  &.carousel-caption {
    text-align: left;
    padding: 20px;
    color: #000000;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      rgba(182, 31, 252, 0.5),
      rgba(206, 125, 243, 0.5)
    );
    border-radius: 15px;

    /* Ajustes para telas pequenas (celulares) */
    @media (max-width: 576px) {
      padding: 10px;
      text-align: center;
    }

    /* Ajustes para telas grandes (desktops grandes) */
    @media (min-width: 1025px) {
      padding: 40px;
      text-align: left;
    }
  }
`;

export const CarouselTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 3px 3px 4px rgba(255, 255, 255, 0.5);
  color: #000000;

  /* Ajustes para telas pequenas (celulares) */
  @media (max-width: 576px) {
    font-size: 20px;
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;

export const CarouselText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  color: #000000;

  /* Ajustes para telas pequenas (celulares) */
  @media (max-width: 576px) {
    font-size: 14px;
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    font-size: 18px;
  }
`;
