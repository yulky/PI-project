import mongoose from "mongoose";

const User = new mongoose.Schema({
    FIO: {type: String, required: true},
    mail: {type: String, required: true},
    number: {type: String},
})

export default mongoose.model('User', User)