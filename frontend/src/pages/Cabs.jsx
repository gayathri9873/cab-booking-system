import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Cabs.css";

function Cabs() {
  const [cabs, setCabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = async () => {
    try {
      const res = await API.get("/cabs");
      setCabs(res.data.cabs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cabs-container">
      <h1 className="cabs-title">Available Cabs</h1>

      <div className="cab-grid">
        {cabs.length === 0 ? (
          <p>No Cabs Available</p>
        ) : (
          cabs.map((cab) => (
            <div key={cab._id} className="cab-card">

              {/* Car Image */}
              <img
                src={`/images/${
                  cab.cabName.toLowerCase().includes("swift")
                    ? "swift.jpg"
                    : cab.cabName.toLowerCase().includes("innova")
                    ? "innova.jpg"
                    : cab.cabName.toLowerCase().includes("ertiga")
                    ? "ertiga.jpg"
                    : "creta.jpg"
                }`}
                alt={cab.cabName}
                className="cab-image"
              />

              <h2>{cab.cabName}</h2>

              <p><strong>Driver:</strong> {cab.driverName}</p>

              <p>⭐⭐⭐⭐⭐ 4.8 Rating</p>

              <p><strong>Vehicle:</strong> {cab.vehicleNumber}</p>

              <p><strong>Car Type:</strong> {cab.carType}</p>

              <p><strong>Seats:</strong> {cab.seats}</p>

              <p className="price">
                ₹ {cab.pricePerKm} / km
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={cab.available ? "available" : "not-available"}>
                  {cab.available ? "Available" : "Not Available"}
                </span>
              </p>

              <button
                className="book-btn"
                onClick={() => {
                  localStorage.setItem("selectedCab", cab.cabName);
                  navigate("/bookings");
                }}
              >
                Book Now
              </button>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cabs;