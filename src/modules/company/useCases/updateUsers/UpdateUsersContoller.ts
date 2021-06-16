import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';

export class UpdateUsersController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name,company_id } = request.body;
    const {id} = request.params;

    const updateUsersUseCase = container.resolve(UpdateUsersUseCase)

    await updateUsersUseCase.excute({name,id,company_id});

    return response.status(201).send();
  }
}