import { Router } from "express";
import productController from "../controllers/productController.js";

const productRoutes = Router()

productRoutes.post('/products', productController.regProduct)
productRoutes.get('/products', productController.showAllProducts)

export default productRoutes