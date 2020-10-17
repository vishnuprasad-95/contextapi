import React, { useContext } from 'react';
import ContactCard from './ContactCard';
import NewContactCard from './NewContactCard';
import { ContactContext } from './contexts/ContactContext';

const ContactList = () => {
  const [contacts] = useContext(ContactContext);
  return(
    <div className="row wrapper">
      {contacts.map((contact, index) => (
        <ContactCard 
          key={index} 
          contact={contact}
        />
      ))}
      <NewContactCard />
    </div>
  );
};

export default ContactList;