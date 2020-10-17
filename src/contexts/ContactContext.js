import React, { useState, createContext } from 'react';

export const ContactContext = createContext()

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      name: 'Vishnu Prasad',
      phone: '9567843305',
      designation: 'Jobless Fool',
      email: 'vishnuprasad.mec@gmail.com',
      description: 'Likes to cook, draw and sleep.',
      image: `./images/vishnu.jpg`,
    },
    {
      name: 'Preveen Raj',
      phone: '9123456788',
      designation: 'Googler',
      email: 'preveenraj97@gmail.com',
      description: 'Likes to code, optimse code and re-code.',
      image: `./images/preveen.jpg`,
    },
    {
      name: 'Ajay Sivan',
      phone: '9876543210',
      designation: 'Appler',
      email: 'ajayesivan@gmail.com',
      description: 'Likes to design shit out of everything.',
      image: `./images/ajay.jpg`,
    },
    {
      name: 'Anjali P A',
      phone: '98761234566',
      designation: 'Googler',
      email: 'ianjali@gmail.com',
      description: 'Likely to be the head of GDG India soon.',
      image: `./images/anjali.jpg`,
    },
    {
      name: 'Anonymous Cat',
      phone: '90111111000',
      designation: 'Licker',
      email: 'anonycat@gmail.com',
      description: 'Likes to lick allll day.. Bloody cat.',
      image: `./images/cat.jpg`,
    }
  ])
  return (
    <ContactContext.Provider value={[contacts, setContacts]}>
      {props.children}
    </ContactContext.Provider>
  );
};

