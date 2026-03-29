import React, { useEffect, useState } from "react";
import { fetchHotels } from "../services/api";
import RoomCard from "./RoomCard";

const HotelList = ({ filters }) => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const res = await fetchHotels(filters);
        setHotels(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load hotels");
      }
    };

    loadHotels();
  }, [filters]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Hotels</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {hotels.length === 0 && !error && <p>No hotels found</p>}

      {hotels.map((hotel) => (
        <div key={hotel.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{hotel.name}</h3>
          <p>{hotel.location} | ⭐ {hotel.rating}</p>

          {(hotel.rooms || []).map((room) => (
            <RoomCard key={room.id} room={room} hotelId={hotel.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HotelList;