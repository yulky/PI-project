import Router from 'express'
import PostController from '../controllers/PostController.js';
import ShowController from '../controllers/ShowController.js';
import BookingController from '../controllers/BookingController.js';
import CategoryController from '../controllers/CategoryController.js';


const router = new Router()

/* Шоу */
router.post('/show', ShowController.create)
router.get('/shows', ShowController.getAll)
router.get('/show/:id', ShowController.getOne)
router.delete('/show/:id', ShowController.delete)
router.get('/show_category/:id', ShowController.getShowCategory)

// Заказы
// создать и убавить кол-во заказов
router.post('/booking', BookingController.create)
router.delete('/booking/:id', BookingController.delete)

// Получить все шоу категории
router.get('/category_shows/:id', CategoryController.getAllShowsOnCategory);

export default router;