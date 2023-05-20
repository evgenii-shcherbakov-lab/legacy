import { NextFunction, Request, Response } from 'express';
import { safeCall } from '../shared/decorators';
import ApiError from '../errors/api.error';
import { ErrorMessage } from '../shared/enums';
import S3Service from '../services/s3.service';
import { UploadedFile } from 'express-fileupload';
import { extname } from 'path';
import { JSON_EXT } from '../shared/constants';

export default class FileController {
  @safeCall(ApiError.internal(ErrorMessage.File))
  static async getFile(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params;
    const isJson = extname(name) === JSON_EXT;
    let file = await S3Service.loadFile(name);

    if (isJson) {
      file = JSON.parse(file);
    }

    return res.json(file);
  }

  @safeCall(ApiError.internal(ErrorMessage.File))
  static async uploadFile(req: Request, res: Response, next: NextFunction) {
    let file: UploadedFile | UploadedFile[] = req.files.data;

    if (Array.isArray(file)) {
      file = file[0];
    }

    const location: string = await S3Service.uploadFile(file.name, file.data);
    return res.json({ location, url: `/file/${file.name}` });
  }
}
