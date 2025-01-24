import CategoryService from "../services/CategoryService.js";

class CategoryController {
    async getAllShowsOnCategory (req, res) {
        try {
            const shows = await CategoryService.getAllShowsOnCategory(req.params.id)
            res.status(200).json(shows);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Error getting shows', error: e.message });
        }
    }
}

export default new CategoryController();