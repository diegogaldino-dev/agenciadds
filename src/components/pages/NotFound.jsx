import React from 'react';
import styled from 'styled-components';
import useGoogleAnalytics from '../useGoogleAnalytics';

// Importe a imagem
import errorImage from '../../img/gif/404.gif';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorImage = styled.img`
  width: 800px; /* Ajuste o tamanho da imagem conforme necessário */
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #666;
`;

const NotFound = () => {
  useGoogleAnalytics("G-RHJ8R95WMZ");
  return (
    <NotFoundContainer>
      {/* Exibe a imagem */}
      <ErrorImage src={errorImage} alt="Erro 404" />
      <Title>404 - Página não encontrada</Title>
      <Message>A página que você está procurando não foi encontrada.</Message>
    </NotFoundContainer>
  );
}

export default NotFound;
