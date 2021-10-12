import { pageRouter } from '@pages/infra/routes/index.routes';
import { userRouter } from '@users/infra/routes/index.routes';
import {Router} from 'express';

const serverRouter = Router();

serverRouter.use("/users", userRouter); // rota de usuários
serverRouter.use("/pages", pageRouter);


export default serverRouter;
