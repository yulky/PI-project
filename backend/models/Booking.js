import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Booking', bookingSchema);