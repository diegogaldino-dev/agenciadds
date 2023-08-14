import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const Cards = ({ name, image, description, categoryLink }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="text-center">
          <Link
            to={categoryLink}
            className="btn btn-primary"
            onClick={() => {
              window.scrollTo(0, 0); // Scroll para o topo da página
            }}
          >
            Saiba Mais
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
