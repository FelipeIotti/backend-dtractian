import { getMongoRepository, getRepository, MongoRepository, Repository } from "typeorm";
import { Actives } from "../../entities/Actives";
import { Units } from "../../entities/Units";
import { IUnitsRepository, ICreateUnitsDTO, IDeleteUnitsDTO, IUpdateUnitsDTO } from "../IUnitsRepository";

export class UnitsRepository implements IUnitsRepository {
  private repository: MongoRepository<Units>;

  private activesRepository: MongoRepository<Actives>

  constructor(){
    this.repository = getMongoRepository(Units);

    this.activesRepository = getMongoRepository(Actives);
  }

  async create({description, name,company_id}: ICreateUnitsDTO): Promise<void> {
    const units = this.repository.create({
      description,
      name,
      company_id
    })
  
    await this.repository.save(units)
  }

  async list(): Promise<Units[]> {
    const units = await this.repository.find();
    return units;
  }

  async findByName(name: string): Promise<Units> {
    const units = await this.repository.findOne({name});
    return units;
  }

  async update({id,description, name,company_id}:IUpdateUnitsDTO):Promise<void> {
    const units = await this.repository.findOne(id);

    const actives = await this.activesRepository.find();

    const activesArray = actives.filter((active) =>{
       active.company_id = company_id;
    });

    await this.activesRepository.save(activesArray);
    
    units.name = name;
    units.description = description;
    
    await this.repository.save(units);
  }

  async delete({id}: IDeleteUnitsDTO): Promise<void> {
    const units = await this.repository.findOne(id);

    const actives = await this.activesRepository.find();

    const activesArray = actives.filter((active)=>{
      return active.units_id === String(units.id)
    });

    await this.activesRepository.remove(activesArray);
    await this.repository.delete(units);
  }
}