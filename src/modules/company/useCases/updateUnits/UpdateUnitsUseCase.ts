import { inject, injectable } from "tsyringe";
import { IUnitsRepository } from "../../repositories/IUnitsRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
  company_id: string;
}

@injectable()
export class UpdateUnitsUseCase {
  constructor(
      @inject("UnitsRepository")
      private unitsRepository: IUnitsRepository
    ){}

  async excute({description, name,id,company_id}:IRequest): Promise<void> {

    this.unitsRepository.update({description, name,id,company_id});
  }
}