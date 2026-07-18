const express = require("express");
const router = express.Router();

const {
  addCab,
  getAllCabs,
  deleteCab,
} = require("../controllers/cabController");

// Add Cab
router.post("/add", addCab);

// Get All Cabs
router.get("/", getAllCabs);

// Delete Cab
router.delete("/:id", deleteCab);

module.exports = router;