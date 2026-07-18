import { useState } from "react";
import API from "../services/api";

function Bookings() {
  const user = JSON.parse(localStorage.getItem("user"));
  const selectedCab = localStorage.getItem("selectedCab");

  const [formData, setFormData] = useState({
    userName: user?.name || "",
    userEmail: user?.email || "",
    cabName: selectedCab || "",
    pickupLocation: "",
    dropLocation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/bookings/book", formData);

      alert(res.data.message);

      // Remove selected cab after successful booking
      localStorage.removeItem("selectedCab");

      // Keep logged-in user details
      setFormData({
        userName: user?.name || "",
        userEmail: user?.email || "",
        cabName: "",
        pickupLocation: "",
        dropLocation: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Book a Cab</h1>

      <form onSubmit={handleSubmit}>

        {/* User Name */}
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          value={formData.userName}
          readOnly
        />

        <br /><br />

        {/* User Email */}
        <input
          type="email"
          name="userEmail"
          placeholder="Your Email"
          value={formData.userEmail}
          readOnly
        />

        <br /><br />

        {/* Cab Name */}
        <input
          type="text"
          name="cabName"
          placeholder="Cab Name"
          value={formData.cabName}
          readOnly
        />

        <br /><br />

        {/* Pickup Location */}
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Drop Location */}
        <input
          type="text"
          name="dropLocation"
          placeholder="Drop Location"
          value={formData.dropLocation}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Book Cab
        </button>

      </form>
    </div>
  );
}

export default Bookings;