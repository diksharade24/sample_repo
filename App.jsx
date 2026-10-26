import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Discover beautiful houseplants, bring nature into
          your home, and create a greener, more peaceful space.
          Find the perfect plant for every corner.
        </p>

        <Link to="/plants" className="primary-btn">
          Get Started
        </Link>

        <p>
          <Link to="/about" className="home-about-link">
            Learn More About Us
          </Link>
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
