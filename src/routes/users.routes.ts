import { Router } from "express";
import { CreateUsersController } from "../modules/company/useCases/createUsers/CreateUsersController"
import { DeleteUsersController } from "../modules/company/useCases/deleteUsers/DeleteUsersController";
import { ListUsersController } from "../modules/company/useCases/listUsers/ListUsersController";
import { UpdateUsersController } from "../modules/company/useCases/updateUsers/UpdateUsersContoller";

export const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const deleteUsersController = new DeleteUsersController();
const updateUsersController = new UpdateUsersController();

usersRoutes.post('/',createUsersController.handle);

usersRoutes.get('/', listUsersController.handle);

usersRoutes.delete('/:id',deleteUsersController.handle);

usersRoutes.put('/:id',updateUsersController.handle);