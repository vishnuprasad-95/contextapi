import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    dark: {
      color: '#d6d6d6',
      background: '#292929',
    },
    light: {
      color: '#292929',
      background: '#d6d6d6',
    }
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

