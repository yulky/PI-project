import BookingRepository from "../repositories/BookingRepository.js";
import ShowRepository from "../repositories/ShowRepository.js";

class BookingService {
    async create(booking) {
        const createdBooking = await BookingRepository.create(booking);

        // Уменьшаем количество доступных билетов на 1
        const show = await ShowRepository.getOne(booking.showId);
        if (!show) {
            throw new Error('Show not found.');
        }
        if (show.availableTickets <= 0) {
            throw new Error('No available tickets.');
        }
        const oldAvailableTickets = show.availableTickets;
        show.availableTickets -= 1;
        await ShowRepository.save(show);

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
        const booking = await BookingRepository.findByIdAndDelete(id);
        return booking;
    }
}

export default new BookingService();
