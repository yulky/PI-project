import Booking from "../models/Booking.js";

class BookingService {
    async create (booking) {
        const createdBooking = await Booking.create(booking);
        return createdBooking;
    }
    async delete (id) {
        if (!id) {
            throw new Error('Id не указан.')
        }
        const booking = await Booking.findByIdAndDelete(id);
        return booking;
    }
    // обновить количество билетов
}

export default new BookingService;