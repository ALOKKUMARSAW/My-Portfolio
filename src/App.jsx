import React from "react";
import Navbar from "@components/common/Navbar";
import Home from "@components/sections/Home";
import About from "@components/sections/About";
import Services from "@components/sections/Services";
import Skills from "@components/sections/Skills";
import Projects from "@components/sections/Projects";
import Contact from "@components/sections/Contact";
import Footer from '@components/common/Footer';
import "@styles/navbar.css";
import "@styles/hero.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
