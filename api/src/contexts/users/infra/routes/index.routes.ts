import { AuthenticateUserController, CreateUserController } from '@users/infra/controllers';
import {Router} from 'express';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRouter.post('/', createUserController.handle);
userRouter.post('/login', authenticateUserController.handle);

export {userRouter};
