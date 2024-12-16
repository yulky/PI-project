const express = require('express');
const Booking = require('../models/Booking');
const Show = require('../models/Show');
const router = express.Router();
// Get bookings
router.get('/', async (req, res) => {
    try {
      const bookings = await Booking.find().populate('showId');
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching bookings' });
    }
  });
  
  // Create a booking
  router.post('/', async (req, res) => {
    const { showId, userName, tickets } = req.body;
  
    try {
      const show = await Show.findById(showId);
      if (!show) return res.status(404).json({ message: 'Show not found' });
      if (show.availableTickets < tickets) return res.status(400).json({ message: 'Not enough tickets available' });
  
      const newBooking = new Booking({ showId, userName, tickets });
      await newBooking.save();
  
      // Update available tickets
      show.availableTickets -= tickets;
      await show.save();
  
      res.status(201).json(newBooking);
    } catch (err) {
      res.status(400).json({ message: 'Error creating booking' });
    }
  });
  
  module.exports = router;