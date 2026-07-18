import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("selectedCab");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🚖 Cab Booking
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cabs">Cabs</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/history">History</Link>
        <Link to="/admin">Admin</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;