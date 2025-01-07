import ShowService from '../services/ShowService.js';
import showRepository from '../repositories/showRepository.js';

// Мокаем методы репозитория
jest.mock('../repositories/showRepository.js');

describe('ShowService', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {}); // Мокируем console.error
    });


    afterEach(() => {
        jest.clearAllMocks(); // Сброс моков после каждого теста
    });

  describe('create', () => {
    it('должен создать новое шоу', async () => {
      const mockShow = { name: 'Новое шоу', category: 'Комедия' };
      const mockCreatedShow = { ...mockShow, id: '1' };
      showRepository.create.mockResolvedValue(mockCreatedShow);

      const result = await ShowService.create(mockShow);

      expect(result).toEqual(mockCreatedShow);
      expect(showRepository.create).toHaveBeenCalledTimes(1);
      expect(showRepository.create).toHaveBeenCalledWith(mockShow);
    });
  });

  describe('findAll', () => {
    it('должен вернуть список шоу', async () => {
      const mockShows = [{ name: 'Шоу 1' }, { name: 'Шоу 2' }];
      showRepository.findAll.mockResolvedValue(mockShows);

      const result = await ShowService.findAll();

      expect(result).toEqual(mockShows);
      expect(showRepository.findAll).toHaveBeenCalledTimes(1);
    });

    it('должен выбросить ошибку, если произошла проблема', async () => {
      const mockError = new Error('Database error');
      showRepository.findAll.mockRejectedValue(mockError);

      await expect(ShowService.findAll()).rejects.toThrow('Не удалось получить список шоу.');
      expect(showRepository.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('getOne', () => {
    it('должен вернуть одно шоу по id', async () => {
      const mockShow = { id: '1', name: 'Шоу 1' };
      showRepository.getOne.mockResolvedValue(mockShow);

      const result = await ShowService.getOne('1');

      expect(result).toEqual(mockShow);
      expect(showRepository.getOne).toHaveBeenCalledTimes(1);
      expect(showRepository.getOne).toHaveBeenCalledWith('1');
    });

    it('должен выбросить ошибку, если шоу не найдено', async () => {
      showRepository.getOne.mockResolvedValue(null);

      await expect(ShowService.getOne('1')).rejects.toThrow('Шоу не найдено.');
      expect(showRepository.getOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('getShowCategory', () => {
    it('должен вернуть категорию шоу по id', async () => {
      const mockShow = { id: '1', categoryId: { name: 'Комедия' } };
      showRepository.getShowCategory.mockResolvedValue(mockShow);

      const result = await ShowService.getShowCategory('1');

      expect(result).toEqual('Комедия');
      expect(showRepository.getShowCategory).toHaveBeenCalledTimes(1);
      expect(showRepository.getShowCategory).toHaveBeenCalledWith('1');
    });

    it('должен выбросить ошибку, если шоу не найдено', async () => {
      showRepository.getShowCategory.mockResolvedValue(null);

      await expect(ShowService.getShowCategory('1')).rejects.toThrow('Шоу не найдено.');
      expect(showRepository.getShowCategory).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteById', () => {
    it('должен удалить шоу по id', async () => {
      const mockDeletedShow = { id: '1', name: 'Удаленное шоу' };
      showRepository.deleteById.mockResolvedValue(mockDeletedShow);

      const result = await ShowService.deleteById('1');

      expect(result).toEqual(mockDeletedShow);
      expect(showRepository.deleteById).toHaveBeenCalledTimes(1);
      expect(showRepository.deleteById).toHaveBeenCalledWith('1');
    });

    it('должен выбросить ошибку, если шоу с id не найдено', async () => {
      showRepository.deleteById.mockResolvedValue(null);

      await expect(ShowService.deleteById('1')).rejects.toThrow('Шоу с таким id не найдено.');
      expect(showRepository.deleteById).toHaveBeenCalledTimes(1);
    });

    it('должен выбросить ошибку, если произошла проблема', async () => {
      const mockError = new Error('Database error');
      showRepository.deleteById.mockRejectedValue(mockError);

      await expect(ShowService.deleteById('1')).rejects.toThrow('Шоу с таким id не найдено.');
      expect(showRepository.deleteById).toHaveBeenCalledTimes(1);
    });
  });
});
