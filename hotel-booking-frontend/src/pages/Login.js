import React, { useState } from "react";
import { Link } from "react-router-dom"; // Added this
import "./Home.css";

const Login = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  // We need to define this here so the footer doesn't crash
  const footerLinks = [
    {
      title: "OUR PRODUCTS",
      links: ["Domestic Hotels", "International Hotels", "International Flights"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Terms & Conditions", "Privacy"]
    }
  ];

  const handleLogin = () => {
    console.log(data);
    alert("Login Successful");
  };

  // --- Inline Styles ---
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
    <div className="login-page-container"> {/* Single parent wrapper */}
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🏨 MyHotel</div>
        <div className="nav-links">
          <Link to="/">Home</Link> {/* Added Home link for better UX */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* LOGIN FORM SECTION */}
      <div style={{ textAlign: "center", padding: "100px 20px", minHeight: "60vh" }}>
        <h2 style={headingStyle}>Login</h2>

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

        <button style={buttonStyle} onClick={handleLogin}>
          Login
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

export default Login;