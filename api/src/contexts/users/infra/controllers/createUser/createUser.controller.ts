import { CreateUserService } from "@users/infra/services";
import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {username, password, image_url} = request.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.execute({
      username,
      password,
      image_url
    });


   return response.json(result);


  }
}

export {CreateUserController};
