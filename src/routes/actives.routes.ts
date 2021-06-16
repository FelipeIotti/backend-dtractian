import { Router } from "express";

import { CreateActivesController } from "../modules/company/useCases/createActives/CreateActivesContoller";
import { DeleteActivesController } from "../modules/company/useCases/deleteActives/DeleteActivesController";
import { ListActivesController } from "../modules/company/useCases/listActives/ListActivesController";
import { UpdateActivesController } from "../modules/company/useCases/updateActives/UpdateActivesContoller";

export const activesRoutes = Router();

const createActivesController = new CreateActivesController();
const listActivesController = new ListActivesController();
const updateActivesController = new UpdateActivesController();
const deleteActivesController = new DeleteActivesController();

activesRoutes.post('/',createActivesController.handle);

activesRoutes.get('/', listActivesController.handle);

activesRoutes.put('/:id', updateActivesController.handle);

activesRoutes.delete('/:id', deleteActivesController.handle);