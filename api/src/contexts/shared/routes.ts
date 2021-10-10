import { userRouter } from '@users/infra/routes/index.routes';
import {Router} from 'express';

const serverRouter = Router();

serverRouter.use(userRouter); // rota de usuários


export default serverRouter;
