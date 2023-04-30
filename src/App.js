import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Media.scss";

import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
