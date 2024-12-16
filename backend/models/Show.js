const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  availableTickets: { type: Number, required: true },
});

module.exports = mongoose.model('Show', showSchema);