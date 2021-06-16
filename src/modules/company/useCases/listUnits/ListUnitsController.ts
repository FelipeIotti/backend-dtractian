import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUnitsUseCase } from "./ListUnitsUseCase";

export class ListUnitsController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listUnitsUseCase = container.resolve(ListUnitsUseCase);

    const all = await listUnitsUseCase.excute();

    return response. json(all);
  }
}