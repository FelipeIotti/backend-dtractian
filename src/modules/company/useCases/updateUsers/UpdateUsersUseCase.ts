import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  name: string;
  company_id: string;
}

@injectable()
export class UpdateUsersUseCase {
  constructor(
      @inject("UsersRepository")
      private usersRepository: IUsersRepository
    ){}

  async excute({id,name,company_id}:IRequest): Promise<void> {

    this.usersRepository.update({id,name,company_id});
  }
}