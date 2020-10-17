import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactList from './ContactList';
import TopNav from './TopNav';
import { ContactProvider } from './ContactContext';
import { ThemeProvider } from './ThemeContext';

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
