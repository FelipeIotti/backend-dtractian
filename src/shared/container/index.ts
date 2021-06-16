import {container} from 'tsyringe'
import {IUnitsRepository} from '../../modules/company/repositories/IUnitsRepository'
import { UnitsRepository } from '../../modules/company/repositories/implementations/UnitsRepository';

import { UsersRepository } from '../../modules/company/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/company/repositories/IUsersRepository';
import { IActivesRepository } from '../../modules/company/repositories/IActivesRepository';
import { ActivesRepository } from '../../modules/company/repositories/implementations/ActivesRepository';
import { ICompanyRepository } from '../../modules/company/repositories/ICompanyRepository';
import { CompanyRepository } from '../../modules/company/repositories/implementations/CompanyRepository';

container.registerSingleton<IUnitsRepository>("UnitsRepository",UnitsRepository);

container.registerSingleton<IUsersRepository>("UsersRepository",UsersRepository);

container.registerSingleton<IActivesRepository>("ActivesRepository",ActivesRepository);

container.registerSingleton<ICompanyRepository>("CompanyRepository",CompanyRepository);