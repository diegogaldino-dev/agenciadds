import styled from "styled-components";

export const ImagemCarrousel = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 576px) {
    height: 300px;
  }
`;

export const CarouselCaption = styled.div`
  &.carousel-caption {
    text-align: left;
    padding: 20px;
    color: #000000;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    background: linear-gradient(rgba(182, 31, 252, 0.5), rgba(206, 125, 243, 0.5)); /* Gradiente de fundo para destacar o texto */
    border-radius: 15px;

    @media (max-width: 576px) {
      padding: 10px; /* Reduzindo o padding para telas menores */
    }
  }
`;

export const CarouselTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  color: #000000;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CarouselText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  color: #000000;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
