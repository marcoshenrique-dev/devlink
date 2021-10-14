import {Router} from 'express';

import { FindPageController, UpdateLinksController } from '../controllers';
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';

const pageRouter = Router();

const findPageController = new FindPageController();
const updateLinksController = new UpdateLinksController();


pageRouter.get('/:url', findPageController.handle);

pageRouter.use(ensureAuthenticated);

pageRouter.put('/:id',  updateLinksController.handle);


export {pageRouter};
