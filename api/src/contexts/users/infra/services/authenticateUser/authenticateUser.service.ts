import { GenerateTokenProvider } from "@shared/providers/generateToken/generateToken.provider";
import { IAuthenticateUserRequest } from "@users/core/requests";
import { FindByUsernameRepository } from "@users/infra/repositories/prisma";
import { compare } from "bcryptjs";

class AuthenticateUserService {
  async execute({username, password}: IAuthenticateUserRequest){

    const findByUsernameRepository = new FindByUsernameRepository();

    const userAlreadyExists = await findByUsernameRepository.findByUsername(username);


    if(!userAlreadyExists){
      throw new Error('user or password incorrect');
    }

    // verificar se a senha está correta

    const passswordMatch = await compare(password, userAlreadyExists.password);

    if(!passswordMatch) {
      throw new Error('user or password incorrect');
    }

    // gera o token do usuario e retorna

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);


    return {token, user: userAlreadyExists};

  }
}


export {AuthenticateUserService};
