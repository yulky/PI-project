import '../models/Show.js'
import Show from '../models/Show.js';
import '../services/ShowService.js'
class ShowController {
    async getAll(req, res) {
        try {
            const posts = await Show.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        
    }

}

export default new ShowController();