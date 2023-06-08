import React from 'react'
import { Image, Title, Text,} from "./style";

import midiaDigital from "../../img/3107569.jpg"

const Midia_digital = () => {
  return (
    <>
    <div className="position-relative">
        <Image
          className="img-fluid"
          src={midiaDigital}
          alt="Imagem midia Digital"
        />
        <div className="position-absolute top-0 start-0">
          <container>
            <div
              className="d-flex flex-column align-items-start"
              style={{ marginLeft: "120px" }}
            >
              <Title>Midia Digital</Title>
              <Text className="text-left custom-text">
              Pensando em potencializar sua presença online e alcançar um público maior? 
              Conte com os serviços de mídia digital da DDS Agência de Desenvolvimento. 
              Nossa equipe especializada oferece soluções personalizadas para impulsionar 
              sua marca e alcançar seus objetivos digitais. Desde estratégias de marketing 
              digital até gerenciamento de redes sociais, estamos prontos para ajudar. Aproveite 
              as vantagens da mídia digital e destaque-se no mercado. Entre em contato conosco e 
              descubra como podemos impulsionar sua presença online.
              </Text>
              
            </div>
          </container>
        </div>
      </div>
    </>
  )
}

export default Midia_digital