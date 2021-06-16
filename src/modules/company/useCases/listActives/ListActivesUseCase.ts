import { inject, injectable } from "tsyringe";
import { Actives } from "../../entities/Actives";
import { IActivesRepository } from "../../repositories/IActivesRepository";

@injectable()
export class ListActivesUseCase {
  constructor(
    @inject('ActivesRepository')
    private activesRepository: IActivesRepository) {}

  async excute(): Promise<Actives[]> {
    const actives = await this.activesRepository.list();

    return actives;
  }
}