import { NextFunction, Request, Response } from 'express';
import { Data, Replica } from '../shared/models';
import { safeCall } from '../shared/decorators';
import ApiError from '../errors/api.error';
import { ErrorMessage } from '../shared/enums';
import S3Service from '../services/s3.service';
import { DATA_FILE } from '../shared/constants';
import { Attendee } from '../dist/express-lambda';

export default class AttendeeController {
  @safeCall()
  static async addAttendee(req: Request, res: Response, next: NextFunction) {
    const { Name, email, is_host, ...fields } = req.body;
    const data: Data = JSON.parse(await S3Service.loadFile(DATA_FILE));

    const attendeeId =
      Math.max(
        ...data.attendees.map(
          (attendee: Attendee) => +attendee.attendee.slice(4)
        )
      ) + 1;

    data.attendees.push({
      Name,
      email,
      is_host,
      attendee: `spk_${attendeeId}`,
      ...fields,
    });
    await S3Service.uploadFile(DATA_FILE, new Buffer(JSON.stringify(data)));
    return res.json(data);
  }

  @safeCall(ApiError.badRequest(ErrorMessage.InvalidData))
  static async attendeePhraseAssignment(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let { attendeeId, blocks } = req.body;
    const data: Data = JSON.parse(await S3Service.loadFile(DATA_FILE));

    if (data.attendees.every(({ attendee }) => attendee !== attendeeId)) {
      return next(ApiError.badRequest(ErrorMessage.NoAttendee));
    }

    if (!Array.isArray(blocks)) {
      return next(ApiError.badRequest(ErrorMessage.InvalidData));
    }

    blocks = blocks.map((index: string | number) => +index);
    data.transcript
      .filter(({ Index }) => blocks.includes(Index))
      .forEach((replica: Replica) => {
        replica.Speaker = attendeeId;
      });

    await S3Service.uploadFile(DATA_FILE, new Buffer(JSON.stringify(data)));
    return res.json(data);
  }

  @safeCall(ApiError.badRequest(ErrorMessage.InvalidData))
  static async mergeAttendees(req: Request, res: Response, next: NextFunction) {
    let { attendeeId, attendeeToMerge } = req.body;
    const data: Data = JSON.parse(await S3Service.loadFile(DATA_FILE));

    if (data.attendees.every(({ attendee }) => attendee !== attendeeId)) {
      return next(ApiError.badRequest(ErrorMessage.NoAttendee));
    }

    if (!Array.isArray(attendeeToMerge)) {
      return next(ApiError.badRequest(ErrorMessage.InvalidData));
    }

    data.transcript
      .filter(({ Speaker }) => attendeeToMerge.includes(Speaker))
      .forEach((replica: Replica) => {
        replica.Speaker = attendeeId;
      });

    await S3Service.uploadFile(DATA_FILE, new Buffer(JSON.stringify(data)));
    return res.json(data);
  }
}
