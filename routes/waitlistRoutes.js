const express = require("express");
const router = express.Router();

const {
  joinWaitlist,
  getCount,
} = require("../controllers/waitlistController");

// Public route - frontend can submit without API key
router.post("/waitlist", joinWaitlist);

// Count route
router.get("/waitlist/count", getCount);

module.exports = router;
// hi
