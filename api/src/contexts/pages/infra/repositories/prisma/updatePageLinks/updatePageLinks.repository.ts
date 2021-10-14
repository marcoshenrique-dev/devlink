import { client } from "@database/client";

class UpdatePageLinksRepository {
  async updatePageLinks(id: string, links: string[]) {
    const pageUpdated = await client.page.update({
      data: {
        links
      },
      where: {
        id
      }
    });

    return pageUpdated;
  }
}

export {UpdatePageLinksRepository};
