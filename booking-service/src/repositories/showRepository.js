import Show from '../models/Show.js';

class ShowRepository {
    async create(showData) {
        const createdShow = await Show.create(showData);
        return createdShow;
    }

    async findAll() {
        try {
          return await Show.find();
        } catch (error) {
          console.error('Ошибка в findAll:', error.message);
          throw new Error('Не удалось получить шоу.');
        }
      }
    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан.');
        }
        const show = await Show.findById(id);
        return show;
    }
    async getShowCategory(showId) {
        const show = await Show.findById(showId).populate('categoryId', 'name');
        return show;
    }
    async getAllShowsByCategory(categoryId) {
        return Show.find({ categoryId });
    }
    async save(show) {
        return await show.save();
    }

    async deleteById(id) {
        try {
          return await Show.findByIdAndDelete(id);
        } catch (error) {
          console.error('Ошибка в deleteById:', error.message);
          throw new Error('Не удалось удалить шоу.');
        }
    }
    
}

export default new ShowRepository();