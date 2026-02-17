import { Router } from "express";
import productController from "../controllers/productController.js";

const productRoutes = Router()

productRoutes.post('/products', productController.regProduct)

export default productRoutes