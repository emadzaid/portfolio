import './App.css'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'
import ThemeContext from './utils/ThemeContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
import ScrollToTopFix from './utils/ScrollToTopFix';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('mode', !darkMode);
  };

  useEffect(() => {
    const mode = localStorage.getItem('mode') === 'true';
    setDarkMode(mode);
  }, []);

  return (

    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>

        <BrowserRouter>
          <ScrollToTopFix />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/projects' element={<ProjectScreen />} />
          </Routes>

        </BrowserRouter>

      </ThemeContext.Provider>

  )
}

export default App
