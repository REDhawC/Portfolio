import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import libs for dark-light mode
import { createContext } from 'react';
import Particle from './components/Particle'

export const themeContext = createContext(null)

function App() {
  const [load, upadateLoad] = useState(true);
  // add dark-light theme state 
  const [theme, setTheme] = useState('dark')
  // add dark-light theme toggler
  const toggleTheme = (curr) => {
    setTheme((curr) => { return curr === 'light' ? 'dark' : 'light' })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);


  return (
    <Router>
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Preloader load={load} />
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar toggleTheme={toggleTheme} theme={theme}/>
            <Particle theme={theme}></Particle>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
