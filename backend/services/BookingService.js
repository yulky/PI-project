import Booking from "../models/Booking.js";
import Show from "../models/Show.js";

class BookingService {
    async create(booking) {
        // Создаем новый заказ
        const createdBooking = await Booking.create(booking);

        // Уменьшаем количество доступных билетов на 1
        const show = await Show.findById(booking.showId);
        if (!show) {
            throw new Error('Show not found.');
        }
        if (show.availableTickets <= 0) {
            throw new Error('No available tickets.');
        }
        const oldAvailableTickets = show.availableTickets
        show.availableTickets -= 1;
        await show.save();

        return {
            booking: createdBooking,
            availableTickets: show.availableTickets,
            oldAvailableTickets: oldAvailableTickets,
        };
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id не указан.');
        }
        const booking = await Booking.findByIdAndDelete(id);
        return booking;
    }
}

export default new BookingService();
