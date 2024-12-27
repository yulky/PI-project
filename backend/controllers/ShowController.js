import Show from '../models/Show.js'
import ShowService from '../services/ShowService.js'
class ShowController {
    async create (req, res) {
        try {
            const post = await PostService.create(req.body)
            res.status(200).json(post);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Error creating post', error: e.message });
        }
    } 
    async getAll(req, res) {
        try {
            const posts = await Show.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await ShowService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан.'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getShowCategory(req, res) {
        try {
            const category_name = await ShowService.getShowCategory(req.params.id);
            return res.json(category_name);
        } catch (e) {
            res.status(500).json('Ошибка получения имени категори')
        }
    }
}






export default new ShowController();

