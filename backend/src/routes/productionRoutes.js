import { Router } from "express";
import productionController from "../controllers/productionController.js";

const productionRoutes = Router()

productionRoutes.post('/productions', productionController.regProduction)



export default productionRoutes