import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteCompanyUseCase} from './DeleteCompanyUseCases';

export class DeleteCompanyController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase)

    await deleteCompanyUseCase.excute({id});

    return response.status(201).send();
  }
}