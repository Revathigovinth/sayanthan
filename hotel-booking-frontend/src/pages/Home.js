import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Local images
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";

function Home() {
  const hotels = [
    { name: "Grand Palace Hotel", location: "Chennai, India", rating: 4.5, img: hotel1 },
    { name: "Ocean View Resort", location: "Goa, India", rating: 4.7, img: hotel2 },
    { name: "Mountain Retreat", location: "Manali, India", rating: 4.6, img: hotel3 },
    { name: "City Lights Hotel", location: "Mumbai, India", rating: 4.3, img: hotel4 },
    { name: "Beachside Paradise", location: "Kerala, India", rating: 4.8, img: hotel5 },
    { name: "Royal Heritage", location: "Jaipur, India", rating: 4.4, img: hotel6 },
  ];

  const footerLinks = [
    {
      title: "OUR PRODUCTS",
      links: ["Domestic Hotels", "International Hotels", "International Flights", "Bus Booking", "Cab Booking", "Train Ticket Booking", "Cheap Flights"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Terms & Conditions", "User Agreement", "Privacy", "Contact Us", "Corporate Social Responsibility", "Goibibo on Mobile"]
    },
    {
      title: "TRENDING CITIES",
      links: ["Hotels in Goa", "Hotels in Delhi", "Hotels in Mumbai", "Hotels in Bangalore", "Hotels in Hyderabad", "Hotels in Pune", "Hotels in Agra"]
    },
    {
      title: "TOP 5 STAR CITIES",
      links: ["5 Star Hotels in Delhi", "5 Star Hotels in Goa", "5 Star Hotels in Mumbai", "5 Star Hotels in Bangalore", "5 Star Hotels in Jaipur", "5 Star Hotels in Chennai", "5 Star Hotels in Hyderabad"]
    }
  ];

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🏨 MyHotel</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* SEARCH BAR SECTION */}
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="e.g. Area, Landmark or Property Name" />
          <input type="date" />
          <input type="date" />
          <select>
            <option>2 Adults | 1 Room</option>
            <option>1 Adult | 1 Room</option>
            <option>2 Adults | 2 Rooms</option>
          </select>
          <button>SEARCH</button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find your next stay</h1>
        <p>Search deals on hotels, homes, and much more...</p>
        <p className="highlight">✅ Free cancellation on most hotels</p>
        <Link to="/search">
          <button className="search-btn">Search Hotels</button>
        </Link>
      </div>

      {/* HOTEL CARDS */}
      <div className="hotel-section">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.img} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>⭐ {hotel.rating} Rating</p>
            </div>
          </div>
        ))}
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
}

export default Home;