import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCompanyUseCase } from "./ListCompanyUseCase";

export class ListCompanyController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listCompanyUseCase = container.resolve(ListCompanyUseCase);

    const all = await listCompanyUseCase.excute();

    return response. json(all);
  }
}