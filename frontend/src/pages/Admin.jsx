import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {
  const [cabs, setCabs] = useState([]);

  const [formData, setFormData] = useState({
    cabName: "",
    driverName: "",
    vehicleNumber: "",
    carType: "",
    pricePerKm: "",
    seats: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addCab = async (e) => {
    e.preventDefault();

    try {
      await API.post("/cabs/add", formData);

      alert("Cab Added Successfully");

      setFormData({
        cabName: "",
        driverName: "",
        vehicleNumber: "",
        carType: "",
        pricePerKm: "",
        seats: "",
      });

      fetchCabs();
    } catch (error) {
      alert("Failed to add cab");
    }
  };

  const deleteCab = async (id) => {
    try {
      await API.delete(`/cabs/${id}`);

      alert("Cab Deleted Successfully");

      fetchCabs();
    } catch (error) {
      alert("Failed to delete cab");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <form onSubmit={addCab}>
        <input
          type="text"
          name="cabName"
          placeholder="Cab Name"
          value={formData.cabName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="driverName"
          placeholder="Driver Name"
          value={formData.driverName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="carType"
          placeholder="Car Type"
          value={formData.carType}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="pricePerKm"
          placeholder="Price Per Km"
          value={formData.pricePerKm}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={formData.seats}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Cab</button>
      </form>

      <hr />

      <h2>Available Cabs</h2>

      {cabs.map((cab) => (
        <div
          key={cab._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{cab.cabName}</h3>
          <p>Driver: {cab.driverName}</p>
          <p>Vehicle: {cab.vehicleNumber}</p>

          <button onClick={() => deleteCab(cab._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;