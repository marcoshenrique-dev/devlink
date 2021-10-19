import { AuthenticateUserService } from "@users/infra/services";
import { Request, Response } from "express";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {

    const {username, password} = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const {token, user} = await authenticateUserService.execute({
      username,
      password
    });

    return response.json({
      token,
      user
    });

  }
}

export {AuthenticateUserController};
