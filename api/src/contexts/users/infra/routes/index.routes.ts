import { CreateUserController } from '@users/infra/controllers';
import {Router} from 'express';

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/users', createUserController.handle);

export {userRouter};
