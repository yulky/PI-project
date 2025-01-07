import BookingService from "../services/BookingService"; // Путь к сервису
import BookingRepository from "../repositories/BookingRepository";
import ShowRepository from "../repositories/showRepository";
import mongoose from "mongoose";

// Мокаем зависимости
jest.mock("../repositories/BookingRepository");
jest.mock("../repositories/showRepository");

describe("BookingService", () => {
  let bookingData;

  beforeEach(() => {
    // Инициализация тестовых данных
    bookingData = { showId: "show1", userId: "user1" };

    // Мокируем поведение репозиториев
    ShowRepository.getOne.mockReset();
    ShowRepository.save.mockReset();
    BookingRepository.create.mockReset();
  });

  it("should create booking successfully", async () => {
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

  it("should throw error if show not found", async () => {
    // Мокаем, что шоу не найдено
    ShowRepository.getOne.mockResolvedValue(null);

    await expect(BookingService.create(bookingData)).rejects.toThrow(
      "Show not found."
    );
  });

  it("should throw error if no available tickets", async () => {
    // Мокаем шоу, но с нулевыми билетами
    ShowRepository.getOne.mockResolvedValue({
      availableTickets: 0,
      _id: "show1",
    });

    await expect(BookingService.create(bookingData)).rejects.toThrow(
      "No available tickets."
    );
  });

  it("should delete booking successfully", async () => {
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

  it("should throw error if id is not provided", async () => {
    await expect(BookingService.delete()).rejects.toThrow("Id не указан.");
  });
});