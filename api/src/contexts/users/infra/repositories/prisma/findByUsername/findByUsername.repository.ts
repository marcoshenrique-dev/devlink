import { client } from "@database/client";
import IUsers from "@users/core/entities/users";

class FindByUsernameRepository {
  async findByUsername(username: string): Promise<IUsers> {
    const user = await client.user.findFirst({
      where: {
        username
      }
    });

    return user;
   }
 }

 export {FindByUsernameRepository};
