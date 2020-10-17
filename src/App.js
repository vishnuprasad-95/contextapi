import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ContactList from './ContactList';
import TopNav from './TopNav';
import { ContactProvider } from './contexts/ContactContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <ContactProvider>
        <div className="App">
          <TopNav />
          <ContactList />
        </div>
      </ContactProvider>
    </ThemeProvider>
  );
}

export default App;
