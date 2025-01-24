import Command from './Command.js';

class DeleteBookingCommand extends Command {
    constructor(bookingService, bookingId) {
        super();
        this.bookingService = bookingService;
        this.bookingId = bookingId;
    }

    async execute() {
        try {
            const result = await this.bookingService.delete(this.bookingId);
            console.log('Бронирование успешно удалено:', result);
            return result;
        } catch (error) {
            console.error('Ошибка при удалении бронирования:', error.message);
        }
    }
}

export default DeleteBookingCommand;
