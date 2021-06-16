import { inject, injectable } from "tsyringe";
import { IActivesRepository } from "../../repositories/IActivesRepository";

interface IRequest {
  name: string;
  image: string;
  description: string;
  model: string;
  units_id: string;
  responsible_id: string;
  responsible: string;
  company_id: string;
  status: string;
  health_level: number;
}

@injectable()
export class CreateActivesUseCase {
  constructor(
      @inject("ActivesRepository")
      private activesRepository: IActivesRepository
    ){}

  async excute({description, name,health_level,image,model,responsible_id,status,units_id,company_id,responsible}:IRequest): Promise<void> {
    const activesAlreadyExists = await this.activesRepository.findByName(name);

    this.activesRepository.create({description, name,health_level,image,model,responsible_id,status,units_id,company_id,responsible});
  }
}