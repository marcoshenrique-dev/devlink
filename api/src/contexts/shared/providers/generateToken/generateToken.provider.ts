import {sign} from 'jsonwebtoken';

class GenerateTokenProvider {
  async execute(userId: string) : Promise<string>{
    const token = sign({}, "11c1c24a-2554-48a2-b6d2-f5586ef20c05", {
      subject: userId,
      expiresIn: '1h', // tempo de expiração temporário
    });

    return token;
  }
}

export {GenerateTokenProvider};
