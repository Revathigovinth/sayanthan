import React, { useState } from "react";
import { Link } from "react-router-dom"; // Essential for the Navbar links
import "./Home.css"; // Ensure this is imported for the Navbar/Footer styles

const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  // Data for the footer to map through
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

  const handleRegister = () => {
    console.log(data);
    alert("Registered Successfully");
  };

  // --- Styles ---
  const inputStyle = {
    width: "300px",
    padding: "12px",
    fontSize: "18px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "320px",
    padding: "12px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#8b5e3c",
    color: "white",
    cursor: "pointer",
  };

  const headingStyle = {
    fontSize: "36px",
    marginBottom: "40px",
  };

  return (
    <div className="register-page-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🏨 MyHotel</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* REGISTRATION FORM */}
      <div style={{ textAlign: "center", padding: "80px 20px", minHeight: "60vh" }}>
        <h2 style={headingStyle}>Register</h2>

        <input
          type="text"
          placeholder="Name"
          style={inputStyle}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        /><br />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        /><br />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        /><br />

        <button style={buttonStyle} onClick={handleRegister}>
          Register
        </button>
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

export default Register;