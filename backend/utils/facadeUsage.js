import BookingFacade from './facade.js';

// Пример создания бронирования
const bookingData = {
    userId: 'user123',
    showId: 'show456',
    tickets: 1
};

async function createBooking() {
    try {
        const result = await BookingFacade.createBooking(bookingData);
        console.log('Бронирование успешно создано:', result);
    } catch (error) {
        console.error(error.message);
    }
}

createBooking();