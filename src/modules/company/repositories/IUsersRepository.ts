import { ObjectID } from 'typeorm';
import {Users} from '../entities/Users'

export interface ICreateUsersDTO {
  name: string;
  company_id: string;
}
export interface IDeleteUsersDTO {
  id: string;
}
export interface IUpdateUsersDTO {
  id: string;
  name: string;
  company_id: string;
}

export interface IUsersRepository {
  findByName(name: string): Promise<Users>;
  list(): Promise<Users[]>;
  create({name,company_id}:ICreateUsersDTO):Promise<void>;
  update({name,id,company_id}:IUpdateUsersDTO):Promise<void>;
  delete({id}:IDeleteUsersDTO):Promise<void>;
}