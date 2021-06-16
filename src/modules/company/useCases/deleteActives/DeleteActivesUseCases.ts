import { inject, injectable } from "tsyringe";
import { IActivesRepository } from "../../repositories/IActivesRepository";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteActivesUseCase {
  constructor(
      @inject("ActivesRepository")
      private activesRepository: IActivesRepository
    ){}

  async excute({id}:IRequest): Promise<void> {

    this.activesRepository.delete({id});
  }
}