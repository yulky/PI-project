import showRepository from '../repositories/showRepository.js';
import EventEmitter from '../utils/EventEmitter.js'

class ShowService {
    async create(show) {
        const createdShow = await showRepository.create(show);
        EventEmitter.emit('showCreated', createdShow); // Уведомление о создании шоу
        return createdShow;
    }

    async findAll(){
        try {
            return await showRepository.findAll();
          } catch (error) {
            console.error('Ошибка в findAll (сервис):', error.message);
            throw new Error('Не удалось получить список шоу.');
          }
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

    async deleteById(id){
        try {
            const deletedShow = await showRepository.deleteById(id);
            if (!deletedShow) {
              throw new Error('Шоу с таким id не найдено.');
            }
            EventEmitter.emit('showDeleted', id); // Уведомление об удалении шоу
            return deletedShow;
          } catch (error) {
            console.error('Ошибка в deleteById (сервис):', error.message);
            throw new Error('Шоу с таким id не найдено.');
        }
    }
}

export default new ShowService();
