const express = require("express");
const router = express.Router();

const apiKeyAuth = require("../middleware/apiKeyAuth");

const {
  joinWaitlist,
  getCount
} = require("../controllers/waitlistController");

router.post("/waitlist", apiKeyAuth, joinWaitlist);

router.get("/waitlist/count", getCount);

module.exports = router;