import { getMongoRepository, getRepository, MongoRepository, Repository } from "typeorm";
import { Actives } from "../../entities/Actives";
import { Company } from "../../entities/Company";
import { Units } from "../../entities/Units";
import { Users } from "../../entities/Users";
import { ICompanyRepository, ICreateCompanyDTO, IDeleteCompanyDTO, IUpdateCompanyDTO } from "../ICompanyRepository";

export class CompanyRepository implements ICompanyRepository {
  private repository: MongoRepository<Company>;

  private unitsRepository: MongoRepository<Units>;

  private usersRepository: MongoRepository<Users>;

  private activesRepository: MongoRepository<Actives>;

  constructor(){
    this.repository = getMongoRepository(Company);
    this.unitsRepository = getMongoRepository(Units);
    this.usersRepository = getMongoRepository(Users);
    this.activesRepository = getMongoRepository(Actives);
  }

  async create({description, name}: ICreateCompanyDTO): Promise<void> {
    const company = this.repository.create({
      description,
      name,
    })
  
    await this.repository.save(company)
  }

  async list(): Promise<Company[]> {
    const company = await this.repository.find();
    return company;
  }

  async findByName(name: string): Promise<Company> {
    const company = await this.repository.findOne({name});
    return company;
  }

  async findById(id: string): Promise<Company[]> {
    const company = await this.repository.findByIds([id]);
    return company;
  }

  async update({description, name, id}:IUpdateCompanyDTO):Promise<void> {
    const company = await this.repository.findOne(id);
    
    company.name = name;
    company.description = description;

    await this.repository.save(company);
  }
  
  async delete({id}: IDeleteCompanyDTO): Promise<void> {
    const company = await this.repository.findOne(id);

    const units = await this.unitsRepository.find();
    const users = await this.usersRepository.find();
    const actives = await this.activesRepository.find();


    const unitsArray = units.filter((unit)=>{
      return unit.company_id === String(company.id);
    }); 
    
    const usersArray = users.filter((user)=>{
      return user.company_id === String(company.id);
    });

    const activesArray = actives.filter((active)=>{
      return active.company_id === String(company.id);
    })

    // const activesArray = unitsArray.filter((unit)=>{
    //   return String(unit.id) === String(actives.values());
    // });

    await this.usersRepository.remove(usersArray);
    await this.unitsRepository.remove(unitsArray);
    await this.activesRepository.remove(activesArray);

    await this.repository.delete(id);
  }
}