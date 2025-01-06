import mongoose from "mongoose";
import BookingRepository from "../repositories/BookingRepository.js";
import ShowRepository from "../repositories/showRepository.js";

class BookingService {
    async create(booking) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const show = await ShowRepository.getOne(booking.showId, session);
            if (!show) {
                throw new Error('Show not found.');
            }
            // Проверяем доступность билетов
            if (show.availableTickets <= 0) {
                throw new Error('No available tickets.');
            }
            // Уменьшаем количество доступных билетов
            const oldAvailableTickets = show.availableTickets;
            show.availableTickets -= 1;
            
            await ShowRepository.save(show, session);
            
            const createdBooking = await BookingRepository.create(booking, session);
            
            await session.commitTransaction();
            session.endSession();

            return {
                booking: createdBooking,
                availableTickets: show.availableTickets,
                oldAvailableTickets: oldAvailableTickets,
            };
        } catch (error) {
            // Откатываем транзакцию в случае ошибки
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
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
