import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
export class UpdateCompanyUseCase {
  constructor(
      @inject("CompanyRepository")
      private companyRepository: ICompanyRepository
    ){}

  async excute({description, name,id}:IRequest): Promise<void> {

    this.companyRepository.update({description, name,id});
  }
}