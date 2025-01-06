import Post from "../models/old models/Post.js";

class PostService {
    async create (post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан.')
        }
        const post = await Post.findById(id);
        return post;
    }
}

export default new PostService;