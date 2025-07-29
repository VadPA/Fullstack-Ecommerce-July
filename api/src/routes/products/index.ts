import { Router } from 'express';
import {
  listProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from './productsController';
import { validateData } from '../../middlewares/validationMiddleware';
import {
  createProductSchema,
  updateProductSchema,
} from '../../db/productsSchema';

// import { z } from 'zod';

// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number({ message: 'Price should be a number.'}),
// })


const router = Router();

// products endpoints
router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', validateData(createProductSchema), createProduct);
router.put('/:id', validateData(updateProductSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;
