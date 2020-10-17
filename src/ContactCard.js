import React, { useState } from 'react';
import styled from 'styled-components';
// import images from './images';

const Card = styled.div`
  position: relative;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardName = styled.div`
  font-size: 25px;
`;

const CardDesignation = styled.div`
  font-size: 20px;
  color: grey;
`;

const CardDescription = styled.div`
  font-size: 18px;
`;

const Rotate = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const CardText = styled.div``;
const CardFace = styled.div``;

const ContactCard = ({ contact: { name, designation, description, phone, email, image } }) => {
  const [rotated, setRotated] = useState(false);

  return (
    <Card className="col-sm-3 contact-card txt-alc">
      <Rotate
        onClick={() => setRotated(!rotated)}
        className={rotated ? "rotate" : ""}
      >
        <CardText className="card-faces">
          <CardName>
            {name}
          </CardName>
          <CardDesignation>
            {designation}
          </CardDesignation>
          <CardDescription>
            {description}
          </CardDescription>
        </CardText>

        {/* <CardFace classNames="card-faces">
          <img src={image} alt={name} width="100" height="100" />
        </CardFace> */}
      </Rotate>
    </Card>
  );
}

export default ContactCard;