import { Router } from "express";
import rawMaterialsController from "../controllers/rawMaterialsController.js";

const rawMaterialsRoutes = Router()

rawMaterialsRoutes.post('/materials', rawMaterialsController.regMaterial)
rawMaterialsRoutes.get('/materials', rawMaterialsController.showAllMaterials)
rawMaterialsRoutes.put('/materials/:id', rawMaterialsController.updateMaterial)
rawMaterialsRoutes.delete('/materials/:id', rawMaterialsController.deleteMaterial)

export default rawMaterialsRoutes