import styled from "styled-components";

export const ImagemCarrousel = styled.img`
  width: 100%; /* Garante que a imagem ocupe toda a largura do container */
  height: auto; /* Mantém a proporção original da imagem */
  max-height: 600px; /* Define uma altura máxima para evitar imagens muito grandes */

  /* Ajustes para telas médias (tablets) */
  @media (max-width: 768px) {
    max-height: 400px; /* Reduz a altura máxima em dispositivos menores */
  }

  /* Ajustes para telas pequenas (celulares) */
  @media (max-width: 576px) {
    max-height: 250px; /* Altura ainda menor para dispositivos pequenos */
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    max-height: 750px; /* Aumenta a altura máxima para telas grandes */
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
    ); /* Gradiente de fundo para destacar o texto */
    border-radius: 15px;

    /* Ajustes para telas pequenas (celulares) */
    @media (max-width: 576px) {
      padding: 10px; /* Reduz o padding para telas menores */
      text-align: center; /* Alinha o texto no centro em telas pequenas */
    }

    /* Ajustes para telas grandes (desktops grandes) */
    @media (min-width: 1025px) {
      padding: 40px; /* Aumenta o padding para telas grandes */
      text-align: left; /* Alinha o texto à esquerda em telas grandes */
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
    font-size: 20px; /* Reduz o tamanho da fonte em telas menores */
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    font-size: 30px; /* Aumenta o tamanho da fonte para telas grandes */
  }
`;

export const CarouselText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  color: #000000;

  /* Ajustes para telas pequenas (celulares) */
  @media (max-width: 576px) {
    font-size: 14px; /* Reduz o tamanho da fonte em telas menores */
  }

  /* Ajustes para telas grandes (desktops grandes) */
  @media (min-width: 1025px) {
    font-size: 18px; /* Aumenta o tamanho da fonte para telas grandes */
  }
`;
