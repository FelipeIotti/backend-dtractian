import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteUsersUseCase {
  constructor(
      @inject("UsersRepository")
      private usersRepository: IUsersRepository
    ){}

  async excute({id}:IRequest): Promise<void> {

    this.usersRepository.delete({id});
  }
}