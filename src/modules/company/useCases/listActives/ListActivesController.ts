import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListActivesUseCase } from "./ListActivesUseCase";

export class ListActivesController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listActivesUseCase = container.resolve(ListActivesUseCase);

    const all = await listActivesUseCase.excute();

    return response. json(all);
  }
}