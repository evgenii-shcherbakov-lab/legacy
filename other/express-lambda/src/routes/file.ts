import { Router } from 'express';
import FileController from '../controllers/file.controller';

const fileRouter = Router();

fileRouter.get('/:name', FileController.getFile);
fileRouter.post('/', FileController.uploadFile);

export default fileRouter;
