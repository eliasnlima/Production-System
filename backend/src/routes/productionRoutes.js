import { Router } from "express";
import productionController from "../controllers/productionController.js";

const productionRoutes = Router()

productionRoutes.post('/productions', productionController.regProduction)
productionRoutes.get('/productions', productionController.canProduce)
productionRoutes.put('/production/:id', productionController.updateProduction)
productionRoutes.delete('/production/:id', productionController.deleteProduction)
productionRoutes.get('/productions/all', productionController.showAllProductions)



export default productionRoutes