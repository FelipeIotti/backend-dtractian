import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteUsersUseCase} from './DeleteUsersUseCases';

export class DeleteUsersController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteUsersUseCase = container.resolve(DeleteUsersUseCase)

    await deleteUsersUseCase.excute({id});

    return response.status(201).send();
  }
}