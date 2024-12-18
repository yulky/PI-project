const mongoose = require('mongoose');

const Show = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date},
  time: { type: String},
  description: { type: String },
  categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
  availableTickets: { type: Number, required: true },
  pice: {type: Number}
});

export default mongoose.model('Show', Show);