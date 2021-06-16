import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteCompanyUseCase {
  constructor(
      @inject("CompanyRepository")
      private companyRepository: ICompanyRepository
    ){}

  async excute({id}:IRequest): Promise<void> {

    this.companyRepository.delete({id});
  }
}