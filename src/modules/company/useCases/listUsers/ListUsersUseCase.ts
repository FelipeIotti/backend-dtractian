import { inject, injectable } from "tsyringe";
import { Users } from "../../entities/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository) {}

  async excute(): Promise<Users[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}