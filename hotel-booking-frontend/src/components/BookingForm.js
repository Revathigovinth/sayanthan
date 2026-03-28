import React, { useState } from "react";
import { bookRoom } from "../services/api";

const BookingForm = ({ hotelId, roomId }) => {
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

  const handleBooking = async () => {
    try {
      const res = await bookRoom({ hotelId, roomId, ...dates });
      alert(`Booking Confirmed! Reservation #: ${res.data.reservationNumber}`);
    } catch (error) {
      console.error(error);
      alert("Booking failed ❌");
    }
  };

  return (
    <div>
      <input
        type="date"
        onChange={(e) =>
          setDates({ ...dates, checkIn: e.target.value })
        }
      />
      <input
        type="date"
        onChange={(e) =>
          setDates({ ...dates, checkOut: e.target.value })
        }
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingForm;