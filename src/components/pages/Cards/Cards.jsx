import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaWhatsapp } from 'react-icons/fa';

function Cards({ name, image, description }) {
  const whatsappNumber = '5511967602269';

  const handleAgendar = () => {
    const message = 'Olá, gostaria de Orçamento.';
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`);
  };

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Button
          variant=""
          style={{ backgroundColor: '#da7605', color: '#fff', transform: 'scale(1)', transition: 'transform 0.3s' }}
          onClick={handleAgendar}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Orçamento <FaWhatsapp className="ms-2" />
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;
