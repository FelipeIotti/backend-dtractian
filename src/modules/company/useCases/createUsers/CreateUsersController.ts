import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {CreateUsersUseCase} from './CreateUsersUseCases';

export class CreateUsersController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name,company_id} = request.body;

    const createUsersUseCase = container.resolve(CreateUsersUseCase)

    await createUsersUseCase.excute({name,company_id});

    return response.status(201).send();
  }
}