import CategoryService from "../services/CategoryService";
import showRepository from "../repositories/showRepository";

// Мокаем зависимость showRepository
jest.mock("../repositories/showRepository");

describe("CategoryService", () => {
  it("should get all shows by category", async () => {
    const shows = [
      { name: "Show1", categoryId: "cat1" },
      { name: "Show2", categoryId: "cat1" }
    ];
    showRepository.getAllShowsByCategory.mockResolvedValue(shows);

    const result = await CategoryService.getAllShowsOnCategory("cat1");

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Show1");
  });

  it("should throw error if no shows found for category", async () => {
    showRepository.getAllShowsByCategory.mockResolvedValue([]);

    await expect(CategoryService.getAllShowsOnCategory("cat1")).rejects.toThrow(
      "Таких шоу нет"
    );
  });
});