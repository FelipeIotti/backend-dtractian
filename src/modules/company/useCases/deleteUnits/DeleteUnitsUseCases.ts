import { inject, injectable } from "tsyringe";
import { IUnitsRepository } from "../../repositories/IUnitsRepository";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteUnitsUseCase {
  constructor(
      @inject("UnitsRepository")
      private unitsRepository: IUnitsRepository
    ){}

  async excute({id}:IRequest): Promise<void> {

    this.unitsRepository.delete({id});
  }
}