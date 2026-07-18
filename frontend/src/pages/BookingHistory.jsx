import { useEffect, useState } from "react";
import API from "../services/api";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Booking History</h1>

      {bookings.length === 0 ? (
        <p>No Bookings Found</p>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{booking.cabName}</h3>
            <p><strong>User:</strong> {booking.userName}</p>
            <p><strong>Email:</strong> {booking.userEmail}</p>
            <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
            <p><strong>Drop:</strong> {booking.dropLocation}</p>
            <p><strong>Status:</strong> {booking.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingHistory;