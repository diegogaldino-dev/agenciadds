import React from 'react';
import Card from 'react-bootstrap/Card';

function Cards({ name, image, description }) {
  return (
    <Card style={{ width: '100%' }} className="text-center text-md-start">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
