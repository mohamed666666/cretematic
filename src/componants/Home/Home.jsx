import React from "react";

import { Component } from "react";
import Hero from "../hero/hero";
import Companies from "../customers/Companies";
import Products from "../products/Products";
import About from "../About/about";
import Contact from "../contact/contact";
import ProdDetail from "../productDetail/prodDetail";
import { Route, Routes } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Companies />
        <Products/>
       
       
        <About />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
