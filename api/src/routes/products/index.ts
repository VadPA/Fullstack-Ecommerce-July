import { Router } from 'express';
import {
  listProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from './productsController.js';
import { validateData } from '../../middlewares/validationMiddleware.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../../db/productsSchema.js';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware.js';

// import { z } from 'zod';

// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number({ message: 'Price should be a number.'}),
// })

const router = Router();

// products endpoints
router.get('/', listProducts);
router.get('/:id', getProductById);
router.post(
  '/',
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.put(
  '/:id',
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete('/:id', verifyToken, verifySeller, deleteProduct);

export default router;
