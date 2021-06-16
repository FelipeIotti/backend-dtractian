import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUnitsRepository } from "../../repositories/IUnitsRepository";

interface IRequest {
  name: string;
  description: string;
  company_id: string;
}

@injectable()
export class CreateUnitsUseCase {
  constructor(
      @inject("UnitsRepository")
      private unitsRepository: IUnitsRepository
    ){}

  async excute({description,name,company_id}:IRequest): Promise<void> {
    const unitAlreadyExists = await this.unitsRepository.findByName(name);

    this.unitsRepository.create({name, description,company_id});
  }
}