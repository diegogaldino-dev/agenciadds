import styled from 'styled-components'
import { Button, Collapse,} from 'react-bootstrap';
import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import Imagetec from '../../img/conceito-de.jpg'
import backimage from '../../img/19198948.jpg'

import backgroundImage from '../../img/bgcolor.jpg'

import contatoRedes from '../../img/contatoo.png'

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

export const ImageCont = styled.img`  
  object-fit: cover;
  background-position: center top -8px;
  width: 100%; 
  height: 600px;  

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    height: 240px;    
  }
`;

export const ImageQuemSomos = styled.img`
  object-fit: cover;
  background-position: center top -8px;
  width: 100%; 
  height: 600px; 

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    height: 240px;    
  }
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

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
    margin-top: -10px;
  }
`;
export const TitleCreate = styled.h2`
  font-size: 60px;
  margin-bottom: 10px;
  background-color: rgb(135, 23, 157);
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  margin-top: 60px;
  box-shadow: 60px -16px teal;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
    margin-top: 60px;
  }
`;

export const TitleMark = styled.h2`
  font-size: 60px;
  margin-bottom: 10px;
  background-color: rgb(135, 23, 157);
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  margin-top: 60px;
  box-shadow: 60px -16px teal;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;


export const Text = styled.p`
  font-size: 16px;
  max-width: 490px;  
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  backdrop-filter: blur(10px);
  
`;

export const TextBGColor = styled.div`
  color: #535a61;
  background-image: url("${Imagetec}");  
  background-size: cover;
  background-position: center top -8px;
`;

export const BackImagemMidia = styled.div`
  color: #535a61;
  background-image: url("${backimage}");  
  background-size: cover;
  background-position: center top -8px;
`;

export const TextImportancia = styled.div`  
`

export const TextBackground = styled.h2`
 justify-content: center;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  backdrop-filter: blur(10px);
`

export const ParagrafoDoTextBackground = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  border-radius: 8px 8px 8px 0px;
  backdrop-filter: blur(10px);
`
export const DivTextCreater = styled.div`
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  
`
export const TextContatoInfo = styled.div`
  background-image: url("${contatoRedes}");
  background-size: cover;
  background-position: center top -8px;
  color: white;
`


export const LinkWithoutUnderline = styled.a`
  text-decoration: none;  
  background-color: #166AF2;
  padding: 5px 10px;
  border-radius: 8px;
`

export const LinkWithoutUnderlinewhats = styled.a`
  text-decoration: none;  
  background-color: #166AF2;
  padding: 5px 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  cursor: pointer;
`

export const ParagrafoDoTextcolorContato = styled.p`
  margin-top: 50px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const TitleContato = styled.h2`
  background-color: #166AF2;
  color: #fff;  
  padding: 5px 10px;
  border-radius: 8px;
  display: inline-block;    
`

export const ContainerCards = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const CardQuemSomos = styled.div`
  width: 300px;
  margin-right: 30px;
  @media (min-width: 768px) {
    /* Estilos específicos para telas maiores que 768 pixels (tablets e desktops) */
    margin-left: 30px; /* Restaura a largura fixa para telas maiores */
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: violet;
  color: white;
  margin-right: 10px;
  cursor: pointer;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

export const StyledCollapse = styled(Collapse)`
  & #first-collapse {
    .card-body {
      padding: 0.75rem;
    }
  }
`;

export const CollapseOpen = styled.span`
  margin-left: auto;
  padding-top: 8px;
  padding-right: 5px;
  cursor: pointer;
`

export const StyledTipo = styled.div`
  font-family: "Roboto Slab", sans-serif;
  background-image: url(${backgroundImage});
  object-fit: cover;
  color: #fff;
`;

export const Backgroud = styled.span`
  background-color: black;
  position: absolute;
    height: 100%;
    width: 100%;
`

export const CustomButton = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #993399;
  }
`;