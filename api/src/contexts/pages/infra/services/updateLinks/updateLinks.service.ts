import { UpdatePageLinksRepository } from "@pages/infra/repositories/prisma";

class UpdateLinksService {
  async execute(id: string, links: string[]) {
    const updatePageLinksRepository = new UpdatePageLinksRepository();

    const pageUpdated = await updatePageLinksRepository.updatePageLinks(id, links);

    return pageUpdated;
  }
}

export {UpdateLinksService};
