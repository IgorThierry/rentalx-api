import { DataSource } from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UserTokens';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';

import { CreateCategories1672930474438 } from './migrations/1672930474438-CreateCategories';
import { CreateSpecifications1673025513028 } from './migrations/1673025513028-CreateSpecifications';
import { CreateUsers1673107695491 } from './migrations/1673107695491-CreateUsers';
import { AlterUserDeleteUsername1673283857097 } from './migrations/1673283857097-AlterUserDeleteUsername';
import { AlterUserAddAvatar1673439600653 } from './migrations/1673439600653-AlterUserAddAvatar';
import { CreateCars1674239473571 } from './migrations/1674239473571-CreateCars';
import { CreateSpecificationsCars1676306499360 } from './migrations/1676306499360-CreateSpecificationsCars';
import { CreateCarImages1676894638222 } from './migrations/1676894638222-CreateCarImages';
import { CreateRentals1677085588541 } from './migrations/1677085588541-CreateRentals';
import { CreateUsersToken1679156716432 } from './migrations/1679156716432-CreateUsersToken';

const dataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: process.env.NODE_ENV === 'test' ? 'rentx_test' : 'rentx',
  entities: [User, UserTokens, Car, CarImage, Category, Specification, Rental],
  migrations: [
    CreateCategories1672930474438,
    CreateSpecifications1673025513028,
    CreateUsers1673107695491,
    AlterUserDeleteUsername1673283857097,
    AlterUserAddAvatar1673439600653,
    CreateCars1674239473571,
    CreateSpecificationsCars1676306499360,
    CreateCarImages1676894638222,
    CreateRentals1677085588541,
    CreateUsersToken1679156716432,
  ],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
