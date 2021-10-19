
require('express-async-errors');

import express, {Request, Response, NextFunction} from 'express';
import router from '@shared/routes';

import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.use((error: Error , _request: Request, response: Response, _next: NextFunction) => {
  console.log(error);
  return response.status(500).json({
    status: 'Error',
    message: error.message
  });
});

app.listen(3001, () => console.log('Server is running on port http://localhost:3001'));
