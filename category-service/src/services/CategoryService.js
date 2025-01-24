import showRepository from '../repositories/showRepository.js';

class CategoryService {
    async getAllShowsOnCategory(categoryId) {
        if (!categoryId) {
            throw new Error('Id не указан.');
        }
        try {
            const shows = await showRepository.getAllShowsByCategory(categoryId);
            if (shows.length === 0) {
                throw new Error('Таких шоу нет.');
            }
            return shows;
        } catch (e) {
            throw new Error('Произошла ошибка при получении шоу.');
        }
    }
}

export default new CategoryService();
