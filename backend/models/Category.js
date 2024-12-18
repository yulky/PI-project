import mongoose from "mongoose";

const Category = new mongoose.Schema ({
  name: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model('Category', Category);