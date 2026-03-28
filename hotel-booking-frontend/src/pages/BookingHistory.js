import React, { useEffect, useState } from "react";
import { getBookingHistory } from "../services/api";

const BookingHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getBookingHistory();
        setHistory(res.data || []);
      } catch (err) {
        console.error("API Error:", err);
        setError("Unable to fetch booking history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Booking History</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && history.length === 0 && !error && (
        <p>No bookings found</p>
      )}

      {history.map((booking) => (
        <div
          key={booking.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <p>Hotel: {booking.hotelName}</p>
          <p>Room: {booking.roomCategory}</p>
          <p>Dates: {booking.checkIn} - {booking.checkOut}</p>
          <button>Rebook</button>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;