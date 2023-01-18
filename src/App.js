import React from "react";
import Navbar from "./Cleanup/Layout/Navbar";
import "./App.css";
// import Hero from "./UI/Hero";
import About from "./Cleanup/Pages/About";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Products from "./Cleanup/Pages/Products";
import Home from "./Cleanup/Pages/Home";
import Contact from "./Cleanup/Pages/Contact";
import singleProduct from "./Cleanup/Pages/singleProduct";
import Footer from "./Cleanup/Layout/Footer";

export default function App() {
  return (
    
      <BrowserRouter>
      <Navbar/> 
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/products/single">
            <singleProduct/>
          </Route> */}
          </Switch> 
          <Footer/>   
      </BrowserRouter>
    
   
  );
}
