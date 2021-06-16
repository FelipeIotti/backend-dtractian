import {Router} from 'express';

import { CreateUnitsController } from '../modules/company/useCases/createUnits/CreateUnitsController';
import { DeleteUnitsController } from '../modules/company/useCases/deleteUnits/DeleteUnitsController';
import { ListUnitsController } from '../modules/company/useCases/listUnits/ListUnitsController';
import { UpdateUnitsController } from '../modules/company/useCases/updateUnits/UpdateUnitsContoller';

export const unitsRoutes = Router();


const createUnitsController = new CreateUnitsController();
const listUnitsController = new ListUnitsController();
const deleteUnitsController = new DeleteUnitsController();
const updateUnitsController = new UpdateUnitsController();

unitsRoutes.post('/', createUnitsController.handle);

unitsRoutes.get('/', listUnitsController.handle);

unitsRoutes.delete('/:id',deleteUnitsController.handle);

unitsRoutes.put('/:id',updateUnitsController.handle);