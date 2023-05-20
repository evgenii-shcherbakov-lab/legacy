import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import apiRouter from './routes';
import errorMiddleware from './middlewares/error.middleware';
import { resolve } from 'path';
import fileUpload from 'express-fileupload';

config();

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.static(resolve(__dirname, '..', 'public')));
  app.use('/', apiRouter);
  app.use(errorMiddleware);
  return app;
}
