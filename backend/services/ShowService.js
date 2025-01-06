import showRepository from '../repositories/showRepository.js';

class ShowService {
    async create(show) {
        const createdShow = await showRepository.create(show);
        return createdShow;
    }

    async getOne(id) {
        const show = await showRepository.getOne(id);
        if (!show) {
            throw new Error('Шоу не найдено.');
        }
        return show;
    }

    async getShowCategory(showId) {
        try {
            const show = await showRepository.getShowCategory(showId);
            if (!show) {
                throw new Error('Шоу не найдено.');
            }
            return show.categoryId.name; // Return the category name
        } catch (error) {
            console.error(`Ошибка получения для showId: ${showId}. Error message: ${error.message}`);
            throw error;
        }
    }
}

export default new ShowService();
