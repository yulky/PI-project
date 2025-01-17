import Command from './Command.js';

class CreateBookingCommand extends Command {
    constructor(bookingService, booking) {
        super();
        this.bookingService = bookingService;
        this.booking = booking;
    }

    async execute() {
        try {
            const result = await this.bookingService.create(this.booking);
            console.log('Бронирование успешно создано:', result);
            return result;
        } catch (error) {
            console.error('Ошибка при создании бронирования:', error.message);
        }
    }
}

export default CreateBookingCommand;
