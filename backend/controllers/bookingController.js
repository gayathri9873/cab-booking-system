const Booking = require("../models/Booking");

// Book a Cab
exports.bookCab = async (req, res) => {
    try {
        const {
            userName,
            userEmail,
            cabName,
            pickupLocation,
            dropLocation
        } = req.body;

        const booking = await Booking.create({
            userName,
            userEmail,
            cabName,
            pickupLocation,
            dropLocation
        });

        res.status(201).json({
            success: true,
            message: "Cab Booked Successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            count: bookings.length,
            bookings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};