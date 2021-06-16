import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { CreateUnitsUseCase } from './CreateUnitsUseCase';

export class CreateUnitsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, description,company_id} = request.body;

    const createUnitsUseCase = container.resolve(CreateUnitsUseCase)

    await createUnitsUseCase.excute({name, description,company_id});

    return response.status(201).send();
  }
}