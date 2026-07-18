const express = require("express");
const router = express.Router();

const {
    bookCab,
    getAllBookings
} = require("../controllers/bookingController");

// Book a cab
router.post("/book", bookCab);

// View all bookings
router.get("/", getAllBookings);

module.exports = router;