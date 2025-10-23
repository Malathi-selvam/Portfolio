import { useState } from "react";
import Home from "./assets/Components/Home";
import "./App.css";
import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";
import Creations from "./assets/Components/Creations";
import Contact from "./assets/Components/Contact";
import Nav from "./assets/Components/Nav";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Creations />
      <Contact />
      <Nav />
    </>
  );
}

export default App;
