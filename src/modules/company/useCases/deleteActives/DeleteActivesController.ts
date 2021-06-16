import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteActivesUseCase} from './DeleteActivesUseCases';

export class DeleteActivesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteActivesUseCase = container.resolve(DeleteActivesUseCase)

    await deleteActivesUseCase.excute({id});

    return response.status(201).send();
  }
}