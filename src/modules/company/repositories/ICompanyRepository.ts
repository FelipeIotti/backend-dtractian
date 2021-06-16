import {Company} from '../entities/Company'

export interface ICreateCompanyDTO {
  name: string;
  description: string;
}
export interface IDeleteCompanyDTO {
  id: string;
}

export interface IUpdateCompanyDTO {
  id: string;
  name: string;
  description: string;  
}

export interface ICompanyRepository {
  findByName(name: string): Promise<Company>;
  findById(id: string): Promise<Company[]>;
  list(): Promise<Company[]>;
  create({name, description}:ICreateCompanyDTO):Promise<void>;
  update({id, name, description}:IUpdateCompanyDTO):Promise<void>;
  delete({id}:IDeleteCompanyDTO):Promise<void>;
}