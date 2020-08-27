import React from "react";
import Home from "./Components/home.js";
import Contact from "./Components/contact.js";
import ProductGallery from "./Components/gallery.js";
import Product from "./Components/product.js";
import About from "./Components/about.js";
import Scroller from "./Components/navigations/navigator.js";

/**
 * Landing page
 * All pages are accessed as components
 * No business logics
 */
function App() {
  return (
    <div className="App">
      <Scroller />
      <Home />
      <About />
      <Product />
      <ProductGallery />
      <Contact />
    </div>
  );
}

export default App;
