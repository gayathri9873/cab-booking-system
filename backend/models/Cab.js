const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema(
{
    cabName: {
        type: String,
        required: true
    },

    driverName: {
        type: String,
        required: true
    },

    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },

    carType: {
        type: String,
        required: true
    },

    pricePerKm: {
        type: Number,
        required: true
    },

    seats: {
        type: Number,
        required: true
    },

    available: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Cab", cabSchema);