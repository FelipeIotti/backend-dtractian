import { getMongoRepository, getRepository, MongoRepository, Repository } from "typeorm";
import { Actives } from "../../entities/Actives";
import { IActivesRepository, ICreateActivesDTO, IDeleteActivesDTO, IUpdateActivesDTO } from "../IActivesRepository";

export class ActivesRepository implements IActivesRepository {
  private repository: MongoRepository<Actives>;

  constructor(){
    this.repository = getMongoRepository(Actives);
  }

  async create({description, name,health_level,image,model,responsible_id,responsible,company_id,status,units_id}: ICreateActivesDTO): Promise<void> {
    const actives = this.repository.create({
      description,
      name,
      health_level,
      image,
      model,
      responsible_id,
      company_id,
      responsible,
      status,
      units_id
    })
  
    await this.repository.save(actives)
  }

  async list(): Promise<Actives[]> {
    const Actives = await this.repository.find();
    return Actives;
  }

  async findByName(name: string): Promise<Actives> {
    const Actives = await this.repository.findOne({name});
    return Actives;
  }

  async findById (id:string): Promise <Actives>{
    const active = await this.repository.findOne(id);

    return active;
  }

  async update({id,description, name,health_level,image,model,responsible,responsible_id,company_id,status,units_id}:IUpdateActivesDTO):Promise<void> {
    const active = await this.repository.findOne(id);
    
    active.name = name;
    active.description = description;
    active.health_level = health_level;
    active.image = image;
    active.model = model;
    active.responsible_id = responsible_id;
    active.responsible = responsible;
    active.company_id = company_id;
    active.status = status;
    active.units_id = units_id;

    await this.repository.save(active);
  }

  async delete({id}: IDeleteActivesDTO): Promise<void> {
    const actives = await this.repository.findOne(id);
    
    await this.repository.delete(actives);
  }
}