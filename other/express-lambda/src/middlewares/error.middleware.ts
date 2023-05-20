import { NextFunction, Request, Response } from 'express';
import { ErrorCode, ErrorMessage } from '../shared/enums';
import ApiError from '../errors/api.error';

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  const { message, name } = err;

  if (err instanceof ApiError) {
    return res.status(err.status).json({ status: err.status, message, name });
  }

  return res.status(ErrorCode.InternalServerError).json({ message: ErrorMessage.Unknown, name });
}
