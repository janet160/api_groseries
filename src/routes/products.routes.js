import Router from 'express';
import productController from '../controllers/products.controller.js';
const router = Router();

router.get('/',productController.getAll)
router.get('/:barcode',productController.getOne)
router.post('/',productController.insertOne)
router.put('/:barcode',productController.updateOne)
router.delete('/delete/:barcode',productController.deleteOne)


export default router;  