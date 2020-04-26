import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import details from "./details";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header details={details} />
      <About details={details} />
      <Projects details={details} />
      <Contact />

      <Footer details={details} />
    </>
  );
}

export default App;
