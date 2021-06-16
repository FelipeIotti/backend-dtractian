import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateUnitsUseCase } from './UpdateUnitsUseCase';

export class UpdateUnitsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {description, name,company_id } = request.body;
    const {id} = request.params;

    const updateUnitsUseCase = container.resolve(UpdateUnitsUseCase)

    await updateUnitsUseCase.excute({description, name,id,company_id});

    return response.status(201).send();
  }
}