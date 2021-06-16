import {Router} from 'express';

import { CreateCompanyController } from '../modules/company/useCases/createCompany/CreateCompanyController';
import { DeleteCompanyController } from '../modules/company/useCases/deleteCompany/DeleteCompanyController';
import { ListCompanyController } from '../modules/company/useCases/listCompany/ListCompanyController';
import { UpdateCompanyController } from '../modules/company/useCases/updateCompany/UpdateCompanyContoller';

export const companyRoutes = Router();


const createCompanyController = new CreateCompanyController();
const listCompanyController = new ListCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const updateCompanyController = new UpdateCompanyController();

companyRoutes.post('/', createCompanyController.handle);

companyRoutes.get('/', listCompanyController.handle);

companyRoutes.delete('/:id',deleteCompanyController.handle);

companyRoutes.put('/:id',updateCompanyController.handle);