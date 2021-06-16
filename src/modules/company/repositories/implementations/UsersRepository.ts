import { getMongoRepository, getRepository, MongoRepository, ObjectID, Repository } from "typeorm";
import { Actives } from "../../entities/Actives";
import { Users } from "../../entities/Users";
import { IUsersRepository, ICreateUsersDTO, IDeleteUsersDTO, IUpdateUsersDTO } from "../IUsersRepository";


export class UsersRepository implements IUsersRepository {
  private repository: MongoRepository<Users>;

  private activesRepository: MongoRepository<Actives>;

  constructor(){
    this.repository = getMongoRepository(Users);
    this.activesRepository = getMongoRepository(Actives);
  }

  async create({name,company_id}: ICreateUsersDTO): Promise<void> {
    const users = this.repository.create({
      name,
      company_id
    })
  
    await this.repository.save(users)
  }

  async list(): Promise<Users[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByName(name: string): Promise<Users> {
    const users = await this.repository.findOne({name});
    return users;
  }

  async update({id, name,company_id}:IUpdateUsersDTO):Promise<void> {
    const users = await this.repository.findOne(id);

    const actives = await this.activesRepository.find();

    const activesArray = actives.filter((active) =>{
      return active.responsible_id = id;
    });

    activesArray.map((active) => { 
      active.responsible= name;
      }
    );
    await this.activesRepository.save(activesArray);
 
    users.name = name;
    users.company_id= company_id;

    await this.repository.save(users);
  }

  async delete({id}: IDeleteUsersDTO): Promise<void> {
    const actives = await this.activesRepository.find();

    const activesArray = actives.filter((active) =>{
      return active.responsible_id = id;
    });

    activesArray.map((active) => { 
      active.responsible_id = '',
      active.responsible= ''
      }
    );
    await this.activesRepository.save(activesArray);

    await this.repository.delete(id);
  }
}