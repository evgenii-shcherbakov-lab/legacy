import ApiError from '../errors/api.error';
import { NextFunction, Request, Response } from 'express';

export function safeCall(error?: ApiError): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): void {
    const original = descriptor.value;

    descriptor.value = async function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      try {
        await original.call(target, req, res, next);
      } catch (e) {
        return next(error || e);
      }
    };
  };
}
