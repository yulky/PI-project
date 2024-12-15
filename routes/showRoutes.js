const express = require('express');
const Show = require('../models/Show');
const router = express.Router();

// Get all shows
router.get('/', async (req, res) => {
  try {
    const shows = await Show.find();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching shows' });
  }
});

// Add a new show
router.post('/', async (req, res) => {
  const { title, description, date, time, availableTickets } = req.body;
  try {
    const newShow = new Show({ title, description, date, time, availableTickets });
    await newShow.save();
    res.status(201).json(newShow);
  } catch (err) {
    res.status(400).json({ message: 'Error adding show' });
  }
});

// Update a show
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, availableTickets } = req.body;
  try {
    const updatedShow = await Show.findByIdAndUpdate(id, { title, description, date, time, availableTickets }, { new: true });
    res.json(updatedShow);
  } catch (err) {
    res.status(400).json({ message: 'Error updating show' });
  }
});

// Delete a show
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Show.findByIdAndDelete(id);
    res.json({ message: 'Show deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting show' });
  }
});

module.exports = router;