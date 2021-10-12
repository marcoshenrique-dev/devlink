import IPages from "@pages/core/entities/pages";
import { ICreatePageRequest } from "@pages/core/requests/createPage.request";
import { StorePageRepository } from "@pages/infra/repositories/prisma";

class CreatePageService {
  async execute({url, userId}: ICreatePageRequest) : Promise<IPages> {
    const storePageRepository = new StorePageRepository();

    const pageCreated = await storePageRepository.store({
      url,
      userId
    });

    return pageCreated;
  }
}

export {CreatePageService};
