import { Router } from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = Router();

// Получить все шоу категории
router.get('/shows/:id', CategoryController.getAllShowsOnCategory);

export default router;