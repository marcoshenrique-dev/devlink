import { CreatePageService } from "@pages/infra/services";
import { CreateUserService } from "@users/infra/services";
import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {username, password, image_url} = request.body;

    const createUserService = new CreateUserService();
    const createPageService = new CreatePageService();

    const user = await createUserService.execute({
      username,
      password,
      image_url
    });

    const page = await createPageService.execute({
      url: username,
      userId: user.id
    });

    console.log(page);


   return response.json({
     user,
     page
   });


  }
}

export {CreateUserController};
