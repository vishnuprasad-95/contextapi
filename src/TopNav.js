import React, {useContext} from 'react';
import addressBook from './images/addressBook.png';
import { ContactContext } from './contexts/ContactContext';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const NavBar = styled.div`
  top: 0;
  padding-top: 5px;
  width: 100vw;
  height: 50px;
  background: #08c4be;
  box-shadow: 0px 34px 56px -20px rgba(8,196,190,1);
  background-image: linear-gradient(#08c4be, #07a39e);
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
`;

const Icon = styled.div`
  width: 30px;
`;

const Counter = styled.h6`
  width: 150px;
  padding-top: 10px;
`;

const TopNav = () => {
  const [contacts] = useContext(ContactContext);

  return (
    <NavBar>
      <Icon>
        <img src={addressBook} alt='Hello' width="40" height="40" />
      </Icon>
      <h3 className="txt-alc">
        CONTACT BOOK
      </h3>
      <Counter>
        Contacts: {contacts.length}
      </Counter>
      <ThemeToggle/>
    </NavBar>
  );
};

export default TopNav;