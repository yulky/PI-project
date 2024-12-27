import mongoose from "mongoose";

const Booking = new mongoose.Schema({
  FIO: { type: String, required: true },
  number: { type: String, required: true },
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
});

export default mongoose.model('Booking', Booking );