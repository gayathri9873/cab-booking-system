const Cab = require("../models/Cab");

// Add a new cab
exports.addCab = async (req, res) => {
  try {
    const {
      cabName,
      driverName,
      vehicleNumber,
      carType,
      pricePerKm,
      seats,
    } = req.body;

    const cab = await Cab.create({
      cabName,
      driverName,
      vehicleNumber,
      carType,
      pricePerKm,
      seats,
    });

    res.status(201).json({
      success: true,
      message: "Cab Added Successfully",
      cab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all cabs
exports.getAllCabs = async (req, res) => {
  try {
    const cabs = await Cab.find();

    res.status(200).json({
      success: true,
      count: cabs.length,
      cabs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a cab
exports.deleteCab = async (req, res) => {
  try {
    const cab = await Cab.findByIdAndDelete(req.params.id);

    if (!cab) {
      return res.status(404).json({
        success: false,
        message: "Cab not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cab deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};