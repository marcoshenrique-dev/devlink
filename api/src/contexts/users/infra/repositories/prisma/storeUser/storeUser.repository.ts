import { client } from "@database/client";
import { ICreateUserRequest } from "@users/core/requests";

import IUsers from "@users/core/entities/users";

class StoreUserRepository {
 async store({image_url, password, username}: ICreateUserRequest): Promise<IUsers> {
      const user = await client.user.create({
        data: {
          username,
          password,
          image_url,
        }
      });

      return user;
  }
}

export {StoreUserRepository};
