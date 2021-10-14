import { UpdateLinksService } from "@pages/infra/services";
import { Request, Response } from "express";

class UpdateLinksController {
  async handle(request: Request, response: Response) {

    const {links} = request.body;
    const {id} = request.params;

    const updateLinkService = new UpdateLinksService();

    const pageUpdated = await updateLinkService.execute(id, links);

    response.json(pageUpdated);
  }
}

export {UpdateLinksController};
