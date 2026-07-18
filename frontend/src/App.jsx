import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cabs from "./pages/Cabs";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";
import BookingHistory from "./pages/BookingHistory";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </>
  );
}

export default App;
