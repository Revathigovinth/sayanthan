import React from "react";
import BookingForm from "./BookingForm";

const RoomCard = ({ room, hotelId }) => (
  <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
    <h4>{room.category} - ₹{room.price}/night</h4>

    <p>
      Amenities: {(room.amenities || []).join(", ")}
    </p>

    <BookingForm hotelId={hotelId} roomId={room.id} />
  </div>
);

export default RoomCard;