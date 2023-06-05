import styled from 'styled-components'
import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

export const LogoImage = styled.img`
  /* Estilos da imagem do logo */
  margin-right: 120px; /* Espaçamento entre os logos */
  max-width: 150px;
  max-height: 150px;
  align-items: center;
  justify-content: center;
`;

export const PIcon = styled.span`
  display: flex;
  font-size: 50px;
  justify-content: center;  
  padding-top: 30px ;
  padding-bottom: 30px ;

`;

export const CodeIcon = styled(FaCode)`   
  color: #166AF2;
`;

export const GlobeIcon = styled(FaMobileAlt)`
  color: #702AAF;
`;

export const PaintBrushIcon = styled(FaPalette)`
  color:  #87179D;  
`;


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  height: 50;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 10px; 
  background-color: rgb(135, 23, 157);
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  margin-top: 60px;
  box-shadow: 60px -16px teal;

`;


export const Text = styled.p`
  font-size: 16px;
  max-width: 490px;  
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  backdrop-filter: blur(10px);
  
`;

