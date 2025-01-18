import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
function App() {
  // State to hold the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set the theme based on localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Store the theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // Apply dark mode class to the root element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "bg-darkBackground text-darkText" : "bg-lightBackground text-lightText"
      } min-h-screen transition-colors duration-30 ease-in-out`}
    >
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Projects />
      <Education/>
      <Experience />
      <Skills />
      <Certifications />
      <Volunteering />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
