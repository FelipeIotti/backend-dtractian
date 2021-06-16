import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { UpdateCompanyUseCase } from './UpdateCompanyUseCase';

export class UpdateCompanyController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {description, name } = request.body;
    const {id} = request.params;
    console.log(id);
    console.log(name);
    console.log(description);

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)

    await updateCompanyUseCase.excute({description, name,id});

    return response.status(201).send();
  }
}