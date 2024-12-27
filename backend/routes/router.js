import Router from 'express'
import PostController from '../controllers/PostController.js';
import ShowController from '../controllers/ShowController.js';
import BookingsController from '../controllers/BookingsController.js';
import CategoryController from '../controllers/CategoryController.js';

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

// Заказы
router.post('/bookings', BookingsController.create)
router.delete('/bookings/:id', BookingsController.delete)

// Получить все шоу категории
router.get('/category_shows/:id', CategoryController.getAllShowsOnCategory);

export default router;