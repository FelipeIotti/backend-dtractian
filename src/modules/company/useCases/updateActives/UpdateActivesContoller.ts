import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateActivesUseCase } from './UpdateActivesUseCase';

export class UpdateActivesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {description, name,health_level,image,model,responsible,responsible_id,company_id,status,units_id} = request.body;
    const {id} = request.params;

    const updateActivesUseCase = container.resolve(UpdateActivesUseCase)

    await updateActivesUseCase.excute({id,description, name,health_level,image,model,responsible,responsible_id,company_id,status,units_id});

    return response.status(201).send();
  }
}