import { FindPageByUrlRepository } from "@pages/infra/repositories/prisma";

class FindPageService {
  async execute(url: string) {
    const findPageByUrlRepository = new FindPageByUrlRepository();

    const page = await findPageByUrlRepository.findByUrl(url);

    return page;
  }
}

export {FindPageService};
