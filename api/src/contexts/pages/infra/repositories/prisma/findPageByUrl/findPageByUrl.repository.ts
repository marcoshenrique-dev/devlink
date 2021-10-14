import { client } from "@database/client";

class FindPageByUrlRepository {
  async findByUrl(url: string) {
    const page = await client.page.findFirst({
      where: {
        url
      }
    });

    return page;
  }
}

export {FindPageByUrlRepository};
