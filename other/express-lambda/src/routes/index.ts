import { Router } from 'express';
import testRouter from './test';
import attendeeRouter from './attendee';
import fileRouter from './file';

const apiRouter = Router();

apiRouter.use('/', testRouter);
apiRouter.use('/attendee', attendeeRouter);
apiRouter.use('/file', fileRouter);

export default apiRouter;
