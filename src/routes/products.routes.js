import Router from 'express';
import productController from '../controllers/products.controller.js';
const router = Router();

router.get('/',productController.getAll)
router.get('/:barcode',productController.getOne)
router.post('/',productController.insertOne)
router.post('/:barcode',productController.updateOne)
router.get('/delete/:barcode',productController.deleteOne)


export default router;  