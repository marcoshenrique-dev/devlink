import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';
import {Router} from 'express';

const pageRouter = Router();

pageRouter.use(ensureAuthenticated);

pageRouter.get('/', (request, response) => {
  return response.json({
    test: true
  });
});

export {pageRouter};
