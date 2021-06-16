import {Actives} from '../entities/Actives'

export interface ICreateActivesDTO {
  name: string;
  image: string;
  description: string;
  model: string;
  units_id: string;
  responsible_id: string;
  responsible: string;
  company_id: string;
  status: string ;
  health_level: number;
}
export interface IUpdateActivesDTO {
  id: string;
  name: string;
  image: string;
  description: string;
  model: string;
  units_id: string;
  responsible_id: string;
  responsible: string;
  company_id: string;
  status: string ;
  health_level: number;
}
export interface IDeleteActivesDTO {
  id: string;
}
export interface IActivesRepository {
  findByName(name: string): Promise<Actives>;
  findById(id: string): Promise<Actives>
  list(): Promise<Actives[]>;
  create({name,image,description,model,units_id,responsible_id,responsible,company_id,status,health_level}:ICreateActivesDTO):Promise<void>;
  update({id,name,image,description,model,units_id,responsible_id,responsible,company_id,status,health_level}:IUpdateActivesDTO):Promise<void>;
  delete({id}:IDeleteActivesDTO): Promise<void>;
}