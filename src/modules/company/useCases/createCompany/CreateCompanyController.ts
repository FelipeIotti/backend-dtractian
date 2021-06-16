import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

export class CreateCompanyController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, description} = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase)

    await createCompanyUseCase.excute({name, description});

    return response.status(201).send();
  }
}