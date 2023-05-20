import { NextFunction, Request, Response, Router } from 'express';

const testRouter = Router();

testRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: 'api worked' });
});

export default testRouter;
