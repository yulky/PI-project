import Router from 'express'
import Post from '../models/Post.js';

const postRouter = new Router()

postRouter.post('/posts', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body;
        const post = await Post.create({ author, title, content, picture });
        res.status(200).json(post);  // Отправляем созданный пост в ответ
    } catch (error) {
        console.error(error);  // Логирование ошибки
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
})
postRouter.get('/posts')
postRouter.get('/posts/:id')
postRouter.put('/posts')
postRouter.delete('/posts/:id')

export default postRouter;