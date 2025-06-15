import React from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/navbar/Home";
import About from "./component/navbar/About";
import Skills from "./component/navbar/Skills";
import Projects from "./component/navbar/Projects";
import Contact from "./component/navbar/Contact";
import Statistics from './component/navbar/Statistics'
import Resume from "./component/navbar/Resume";
import Footer from './component/navbar/Footer';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Statistics/>
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
