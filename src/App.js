import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Index from "./components/Index";



import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
