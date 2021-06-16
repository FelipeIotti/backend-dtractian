import { inject, injectable } from "tsyringe";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

@injectable()
export class ListCompanyUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository) {}

  async excute(): Promise<Company[]> {
    const company = await this.companyRepository.list();

    return company;
  }
}