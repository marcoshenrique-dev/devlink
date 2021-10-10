import { CreateUserController } from '@users/infra/controllers';
import {Router} from 'express';

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/', createUserController.handle);

export {userRouter};
