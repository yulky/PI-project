import BookingService from "../services/BookingService"; // Путь к сервису
import BookingRepository from "../repositories/BookingRepository";
import ShowRepository from "../repositories/showRepository";
import mongoose from "mongoose";

// Мокаем зависимости
jest.mock("../repositories/BookingRepository");
jest.mock("../repositories/showRepository");

// Устанавливаем тайм-аут Jest на 10 секунд для тестов, работающих с транзакциями
jest.setTimeout(10000);

describe("BookingService", () => {
  let bookingData;
  
  const mockSession = {
    startTransaction: jest.fn(),
    commitTransaction: jest.fn(),
    abortTransaction: jest.fn(),
    endSession: jest.fn(),
  };
  
  mongoose.startSession = jest.fn().mockResolvedValue(mockSession);
  

  beforeEach(() => {
    // Инициализация тестовых данных
    bookingData = { showId: "show1", userId: "user1" };

    // Мокируем поведение репозиториев
    ShowRepository.getOne.mockReset();
    ShowRepository.save.mockReset();
    BookingRepository.create.mockReset();
  });

  it("должен успешно создать бронирование", async () => {
    // Мокаем успешное возвращение шоу
    ShowRepository.getOne.mockResolvedValue({
      availableTickets: 1,
      _id: "show1",
    });

    // Мокаем создание бронирования
    BookingRepository.create.mockResolvedValue({
      _id: "booking1",
      showId: "show1",
      userId: "user1",
    });

    const result = await BookingService.create(bookingData);

    expect(result).toHaveProperty("booking");
    expect(result.booking._id).toBe("booking1");
    expect(result.availableTickets).toBe(0);
  });

  it("должен выбросить ошибку, если шоу не найдено", async () => {
    // Мокаем, что шоу не найдено
    ShowRepository.getOne.mockResolvedValue(null);

    await expect(BookingService.create(bookingData)).rejects.toThrow(
      "Show not found."
    );
  });

  it("должен выбросить ошибку, если нет доступных билетов", async () => {
    // Мокаем шоу, но с нулевыми билетами
    ShowRepository.getOne.mockResolvedValue({
      availableTickets: 0,
      _id: "show1",
    });

    await expect(BookingService.create(bookingData)).rejects.toThrow(
      "No available tickets."
    );
  });

  it("должен успешно удалить бронирование", async () => {
    // Мокаем успешное удаление бронирования
    BookingRepository.findByIdAndDelete.mockResolvedValue({
      _id: "booking1",
      showId: "show1",
      userId: "user1",
    });

    const result = await BookingService.delete("booking1");

    expect(result).toHaveProperty("_id");
    expect(result._id).toBe("booking1");
  });

  it("должен выбросить ошибку, если id не указан", async () => {
    await expect(BookingService.delete()).rejects.toThrow("Id не указан.");
  });
});