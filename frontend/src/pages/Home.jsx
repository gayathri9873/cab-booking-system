import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="hero">

        <h1>🚖 Cab Booking System</h1>

        <p>
          Book your ride anytime, anywhere with comfort and safety.
        </p>
<div className="features">
  <div className="feature-card">
    <h2>🚖 Easy Booking</h2>
    <p>Book your cab in just a few clicks.</p>
  </div>

  <div className="feature-card">
    <h2>💰 Affordable Prices</h2>
    <p>Enjoy budget-friendly rides with transparent pricing.</p>
  </div>

  <div className="feature-card">
    <h2>🛡️ Safe Journey</h2>
    <p>Verified drivers and secure travel experience.</p>
  </div>
</div>
        <div className="buttons">

          <button onClick={() => navigate("/cabs")}>
            View Cabs
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;