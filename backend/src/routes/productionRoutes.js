import { Router } from "express";
import productionController from "../controllers/productionController.js";

const productionRoutes = Router()

productionRoutes.post('/productions', productionController.regProduction)
productionRoutes.get('/productions', productionController.canProduce)
productionRoutes.put('/production/:id', productionController.updateProduction)
productionRoutes.delete('/production/:id', productionController.deleteProduction)



export default productionRoutes