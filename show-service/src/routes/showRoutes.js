import { Router } from 'express';
import ShowController from '../controllers/ShowController.js';

const router = Router();

// ../api/show/..
router.get('/', ShowController.getAll);
router.post('/', ShowController.create);
router.get('/:id', ShowController.getOne);
router.delete('/:id', ShowController.delete);

export default router;