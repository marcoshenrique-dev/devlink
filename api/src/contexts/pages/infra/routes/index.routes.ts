import {Router} from 'express';

import { FindPageController } from '../controllers';
import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';

const pageRouter = Router();

const findPageController = new FindPageController();


pageRouter.get('/:url', findPageController.handle);

pageRouter.use(ensureAuthenticated);

export {pageRouter};
