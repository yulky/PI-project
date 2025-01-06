import mongoose from 'mongoose';
import Category from '../models/Category.js';

const ShowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  time: { type: String },
  description: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  availableTickets: { type: Number, required: true },
  price: { type: Number },
});

const Show = mongoose.model('Show', ShowSchema);

export default Show;
