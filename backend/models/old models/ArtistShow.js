import mongoose from "mongoose";
 
 const ArtistShow = new mongoose.Schema ({
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show', required: true },
  artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
});
 
 export default mongoose.model('ArtistShow', ArtistShow);