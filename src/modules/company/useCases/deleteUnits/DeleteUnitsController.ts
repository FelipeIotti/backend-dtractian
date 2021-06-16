import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteUnitsUseCase} from './DeleteUnitsUseCases';

export class DeleteUnitsController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteUnitsUseCase = container.resolve(DeleteUnitsUseCase)

    await deleteUnitsUseCase.excute({id});

    return response.status(201).send();
  }
}