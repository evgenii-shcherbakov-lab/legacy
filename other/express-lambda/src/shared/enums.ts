export enum ErrorCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export enum ErrorMessage {
  Unknown = 'Unknown error',
  File = 'File error',
  NoAttendee = 'Attendee with this id don`t exists',
  InvalidData = 'Invalid request data'
}
