import React, { useState } from "react";
import { Link } from "react-router-dom";
import HotelList from "../components/HotelList";
import "./Home.css"; // Reuse your styles for Navbar and Footer

const SearchResults = () => {
  const [filters, setFilters] = useState({
    location: "",
    checkIn: "",
    checkOut: ""
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const footerLinks = [
    {
      title: "OUR PRODUCTS",
      links: ["Domestic Hotels", "International Hotels", "International Flights"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Terms & Conditions", "Privacy"]
    },
    {
      title: "TRENDING CITIES",
      links: ["Hotels in Goa", "Hotels in Delhi", "Hotels in Mumbai"]
    }
  ];

  // --- Larger Input Styles ---
  const inputStyle = {
    margin: "10px",
    padding: "15px",     // Increased padding
    width: "300px",      // Increased width
    fontSize: "18px",    // Larger text
    borderRadius: "8px",
    border: "2px solid #8b5e3c", // Chocolate border to match theme
    backgroundColor: "white"
  };

  return (
    <div className="search-results-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🏨 MyHotel</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <div style={{ padding: "40px", textAlign: "center", minHeight: "70vh" }}>
        <h2 style={{ fontSize: "32px", color: "#2d1b0e", marginBottom: "30px" }}>
          🔍 Find Your Perfect Stay
        </h2>

        {/* 🔹 SEARCH FORM */}
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            flexWrap: "wrap", 
            gap: "10px", 
            marginBottom: "40px",
            background: "rgba(139, 94, 60, 0.1)", // Subtle chocolate tint
            padding: "30px",
            borderRadius: "15px"
        }}>
          <input
            type="text"
            name="location"
            placeholder="Where are you going?"
            value={filters.location}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="checkIn"
            value={filters.checkIn}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="checkOut"
            value={filters.checkOut}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* 🔹 HOTEL LIST CONTAINER */}
        <div style={{ marginTop: "40px" }}>
          <HotelList filters={filters} />
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-container">
          {footerLinks.map((column, idx) => (
            <div key={idx} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2026 MyHotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;