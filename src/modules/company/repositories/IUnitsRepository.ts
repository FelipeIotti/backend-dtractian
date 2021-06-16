import {Units} from '../entities/Units'

export interface ICreateUnitsDTO {
  name: string;
  company_id: string;
  description: string;
}
export interface IDeleteUnitsDTO {
  id: string;
}

export interface IUpdateUnitsDTO {
  id: string;
  name: string;
  company_id: string;
  description: string;
}
export interface IUnitsRepository {
  findByName(name: string): Promise<Units>;
  list(): Promise<Units[]>;
  create({name, description,company_id}:ICreateUnitsDTO):Promise<void>;
  update({id,name, description,company_id}: IUpdateUnitsDTO): Promise<void>;
  delete({id}:IDeleteUnitsDTO):Promise<void>;
}