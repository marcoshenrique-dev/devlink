import { FindPageService } from "@pages/infra/services";
import { Request, Response } from "express";

class FindPageController {
  async handle(request: Request, response: Response) {

    const {url} = request.params;

    const findPageService = new FindPageService();

    const page = await findPageService.execute(url);

    response.json(page);

  }
}

export {FindPageController};
