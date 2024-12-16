const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
  userName: { type: String, required: true },
  tickets: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);