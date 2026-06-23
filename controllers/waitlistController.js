const Waitlist = require("../models/waitlistModel");

exports.joinWaitlist = async (req, res) => {
  try {
    const data = await Waitlist.createWaitlist(req.body);

    res.status(201).json({
      success: true,
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.getCount = async (req, res) => {
  try {
    const count = await Waitlist.getCount();

    res.json({
      success: true,
      total_waitlist_users: count.count
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};