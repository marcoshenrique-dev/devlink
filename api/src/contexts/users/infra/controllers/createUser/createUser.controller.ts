import { Request, Response } from "express";
import {StoreUserRepository} from '@users/infra/repositories/prisma';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {username, password, image_url} = request.body;

    const storeUserRepository = new StoreUserRepository();

    const result = storeUserRepository.execute();

    response.json(result);


  }
}

export {CreateUserController};
