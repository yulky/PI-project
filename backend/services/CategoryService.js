import Show from "../models/Show.js";

class CategoryService {
    async getAllShowsOnCategory(category_id) {
        if (!category_id) {
            throw new Error('Id не указан.');
        }
        try {
            const shows = await Show.find({ categoryId: category_id });
            if (shows.length === 0) {
                throw new Error('Таких шоу нет');
            }
            return shows;
        } catch (e) {
            throw new Error('Произошла ошибка при получении шоу.');
        }
    }
}

export default new CategoryService;
