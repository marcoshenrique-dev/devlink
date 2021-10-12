import { client } from "@database/client";
import IPages from "@pages/core/entities/pages";
import { ICreatePageRequest } from "@pages/core/requests/createPage.request";

class StorePageRepository {
 async store({url, userId}: ICreatePageRequest): Promise<IPages> {
      const page = await client.page.create({
        data: {
          url,
          userId,
          links: []
        }
      });

      return page;
  }
}

export {StorePageRepository};
