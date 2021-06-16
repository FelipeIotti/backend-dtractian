import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  company_id: string;
}

@injectable()
export class CreateUsersUseCase {
  constructor(
      @inject("UsersRepository")
      private usersRepository: IUsersRepository
    ){}

  async excute({name,company_id}:IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(name);

    this.usersRepository.create({name,company_id});
  }
}