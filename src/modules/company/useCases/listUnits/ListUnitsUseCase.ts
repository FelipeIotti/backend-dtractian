import { inject, injectable } from "tsyringe";
import { Units } from "../../entities/Units";
import { IUnitsRepository } from "../../repositories/IUnitsRepository";

@injectable()
export class ListUnitsUseCase {
  constructor(
    @inject('UnitsRepository')
    private unitsRepository: IUnitsRepository) {}

  async excute(): Promise<Units[]> {
    const units = await this.unitsRepository.list();

    return units;
  }
}