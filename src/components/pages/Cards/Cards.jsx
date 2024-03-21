import React from "react";
import { Card } from "react-bootstrap";
import { StyledSaibaMaisButton } from "./style";

const Cards = ({ name, image, description, categoryLink }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="text-center">
          <StyledSaibaMaisButton
            to={categoryLink}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Saiba Mais
          </StyledSaibaMaisButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
