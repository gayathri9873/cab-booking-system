const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    userName: {
        type: String,
        required: true
    },

    userEmail: {
        type: String,
        required: true
    },

    cabName: {
        type: String,
        required: true
    },

    pickupLocation: {
        type: String,
        required: true
    },

    dropLocation: {
        type: String,
        required: true
    },

    bookingDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ["Booked", "Completed", "Cancelled"],
        default: "Booked"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);