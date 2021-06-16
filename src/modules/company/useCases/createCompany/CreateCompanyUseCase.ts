import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCompanyUseCase {
  constructor(
      @inject("CompanyRepository")
      private companyRepository: ICompanyRepository
    ){}

  async excute({description,name}:IRequest): Promise<void> {
    const companyAlreadyExists = await this.companyRepository.findByName(name);

    this.companyRepository.create({name, description});
  }
}