import BookingService from '../services/BookingService.js';
import ShowService from '../services/ShowService.js';
import CategoryService from '../services/CategoryService.js';

class BookingFacade {
    // Создание бронирования
    async createBooking(booking) {
        try {
            const result = await BookingService.create(booking);
            return result;
        } catch (error) {
            throw new Error(`Ошибка при создании бронирования: ${error.message}`);
        }
    }

    // Удаление бронирования
    async deleteBooking(id) {
        try {
            const booking = await BookingService.delete(id);
            return booking;
        } catch (error) {
            throw new Error(`Ошибка при удалении бронирования: ${error.message}`);
        }
    }

    // Получение всех шоу по категории
    async getShowsByCategory(categoryId) {
        try {
            const shows = await CategoryService.getAllShowsOnCategory(categoryId);
            return shows;
        } catch (error) {
            throw new Error(`Ошибка при получении шоу по категории: ${error.message}`);
        }
    }

    // Создание шоу
    async createShow(show) {
        try {
            const createdShow = await ShowService.create(show);
            return createdShow;
        } catch (error) {
            throw new Error(`Ошибка при создании шоу: ${error.message}`);
        }
    }

    // Получение списка всех шоу
    async getAllShows() {
        try {
            const shows = await ShowService.findAll();
            return shows;
        } catch (error) {
            throw new Error(`Ошибка при получении списка шоу: ${error.message}`);
        }
    }

    // Получение шоу по id
    async getShowById(id) {
        try {
            const show = await ShowService.getOne(id);
            return show;
        } catch (error) {
            throw new Error(`Ошибка при получении шоу по id: ${error.message}`);
        }
    }

    // Получение категории шоу по id
    async getShowCategory(showId) {
        try {
            const category = await ShowService.getShowCategory(showId);
            return category;
        } catch (error) {
            throw new Error(`Ошибка при получении категории шоу: ${error.message}`);
        }
    }

    // Удаление шоу по id
    async deleteShowById(id) {
        try {
            const deletedShow = await ShowService.deleteById(id);
            return deletedShow;
        } catch (error) {
            throw new Error(`Ошибка при удалении шоу по id: ${error.message}`);
        }
    }
}

export default new BookingFacade();