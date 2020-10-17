import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const ThemeToggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { isLightTheme } = theme;

  // const currentTheme = isLightTheme ? light : dark;
  const handleToggle = () => {
    setTheme({...theme, isLightTheme: !isLightTheme });
  }

  return(
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} onChange={() => {}} checked={!isLightTheme}/>
        <span className="slider round"></span>
      </label>
  )
}

export default ThemeToggle;