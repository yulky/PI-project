import mongoose from "mongoose";

const Artist = new mongoose.Schema({
    FIO: {type: String, required: true},
    nikname: {type: String},
})

export default mongoose.model('Artist', Artist)