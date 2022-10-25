import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateProfile from './pages/CreateProfile'
import Profile from './pages/Profile';
import ProjectList from './components/ProjectList'
import Sidebar from './components/Sidebar'

function App() {
  // const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('colorMode');
  //   const currentThemeMode = localStorage.getItem('themeMode');
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, []);
  return (
    
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/createProfile" element={<CreateProfile />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/project-list" element={<ProjectList />}/>
      </Routes>   
    </div>
    </Router>
  )
}

export default App
