import Router from 'express'
import PostController from '../controllers/PostController.js';
import ShowController from '../controllers/ShowController.js';
import Show from '../models/Show.js';

const router = new Router()
/* Посты */
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

/* Шоу маст гоу он */
router.post('/show', ShowController.create)
router.get('/show', ShowController.getAll)
router.get('/show/:id', ShowController.getOne)
// router.put('/show', ShowController.update)
router.delete('/show/:id', PostController.delete)

export default router;