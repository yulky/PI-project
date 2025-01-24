import { Router } from 'express';
import BookingController from '../controllers/BookingController.js';

const router = Router();

// создать и убавить кол-во заказов
router.post('/', BookingController.create)
router.delete('/:id', BookingController.delete)

export default router;