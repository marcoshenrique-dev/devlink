import IUsers from '@users/core/entities/users';
import {ICreateUserRequest} from '@users/core/requests';
import { hash } from 'bcryptjs';
import { FindByUsernameRepository, StoreUserRepository } from '../../repositories/prisma';

class CreateUserService {
  async execute({username, password, image_url}: ICreateUserRequest): Promise<IUsers> {

    const findByUsernameRepository = new FindByUsernameRepository();
    const storeUserRepository = new StoreUserRepository();

    const userAlreadyExists = await findByUsernameRepository.findByUsername(username);

    if(userAlreadyExists) {
      throw new Error('user already exists');
    }

    const passwordHash = await hash(password, 8);

    const userCreated = await storeUserRepository.store({
      image_url,
      username,
      password: passwordHash
    });

    console.log(userCreated);

    return userCreated;
   }
 }

 export {CreateUserService};
