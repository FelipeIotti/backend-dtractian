import { inject, injectable } from "tsyringe";
import { IActivesRepository } from "../../repositories/IActivesRepository";

interface IRequest {
  id: string;
  name: string;
  image: string;
  description: string;
  model: string;
  units_id: string;
  responsible_id: string;
  responsible: string;
  company_id: string;
  status: string ;
  health_level: number;
}

@injectable()
export class UpdateActivesUseCase {
  constructor(
      @inject("ActivesRepository")
      private activesRepository: IActivesRepository
    ){}

  async excute({id,description, name,health_level,image,model,responsible,responsible_id,company_id,status,units_id}:IRequest): Promise<void> {

    this.activesRepository.update({id,description, name,health_level,image,model,responsible,responsible_id,company_id,status,units_id});
  }
}