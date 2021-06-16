import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { CreateActivesUseCase } from './CreateActivesUseCase';

export class CreateActivesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {description, name,health_level,image,model,responsible_id,status,units_id,company_id,responsible } = request.body;

    const createActivesUseCase = container.resolve(CreateActivesUseCase)

    await createActivesUseCase.excute({description, name,health_level,image,model,responsible_id,status,units_id,company_id,responsible});

    
    return response.status(201).send();
  }
}