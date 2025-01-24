import Booking from "../models/Booking.js";

class BookingRepository {
    async create(booking) {
        return await Booking.create(booking);
    }

    async findByIdAndDelete(id) {
        return await Booking.findByIdAndDelete(id);
    }
}

export default new BookingRepository();
