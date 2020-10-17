import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ContactContext } from './ContactContext';

const Card = styled.div`
  position: relative;
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

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background:#292929;

  color: #ffc1bd;
  border: 2px solid #ffc1bd;
`;


const NewContactCard = () => {
  const [contacts, setContacts] = useContext(ContactContext);

  const [rotated, setRotated] = useState(false);
  const [name, setName] = useState('');  
  const [designation, setDesignation] = useState('');  
  const [description, setDescription] = useState('');  

  const updateName = (e) => {
    setName(e.target.value);
  }
  const updateDesignation = (e) => {
    setDesignation(e.target.value);
  }
  const updateDescription = (e) => {
    setDescription(e.target.value);
  }

  const clearFields = () => {
    setName('');
    setDesignation('');
    setDescription('');
  };
  
  const addContact = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(!name || !designation || !description){
      return;
    }

    const newContact = {
      name,
      designation,
      description,
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
    clearFields();
  }

  return(
    <Card className="col-sm-3 contact-card txt-alc">
      <Rotate
        onClick={() => setRotated(!rotated)}
        className={rotated ? "rotate" : ""}
      >
        <CardText className="card-faces">
          <CardName>
            <input type="text" name="name" value={name} 
              onClick={(e)=> e.stopPropagation()} 
              onChange={updateName}/>
          </CardName>
          <CardDesignation>
            <input type="text" name="designation" value={designation} 
              onClick={(e)=> e.stopPropagation()} 
              onChange={updateDesignation}/>
          </CardDesignation>
          <CardDescription>
            <input type="text" name="description" value={description} 
              onClick={(e)=> e.stopPropagation()} 
              onChange={updateDescription}/>
          </CardDescription>
          <Button onClick={addContact}>Add</Button>
        </CardText>

        <CardFace classNames="card-faces">
          <div></div>
        </CardFace>
      </Rotate>
    </Card>
  );
}

export default NewContactCard;
