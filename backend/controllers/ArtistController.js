import Artist from '../models/Artist.js'

class ArtistController {
    async create (req, res) {
        try {
            const post = await PostService.create(req.body)
            res.status(200).json(post);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Error creating post', error: e.message });
        }
    }
}

export default new ArtistController();