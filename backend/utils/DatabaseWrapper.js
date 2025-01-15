// DatabaseWrapper.js
import Database from './db.js';

class DatabaseWrapper {
    constructor() {
        this.db = Database; // Ожидаем, что Database уже является экземпляром или классом
    }

    async connect(uri) {
        try {
            console.log('Подключение к БД...');
            const connection = await this.db.connect(uri);
            console.log('Подключение успешно');
            return connection;
        } catch (error) {
            console.error('Ошибка подключения к БД', error.message);
            throw new Error('Не удалось подключиться к базе данных');
        }
    }

    async performAction(action) {
        try {
            console.log('Выполняется действие...');
            return await action();
        } catch (error) {
            console.error('Ошибка выполнения действия:', error.message);
            throw new Error('Ошибка выполнения операции с БД');
        }
    }
}

export default new DatabaseWrapper();
