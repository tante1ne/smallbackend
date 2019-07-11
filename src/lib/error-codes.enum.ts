export enum ErrorCode {

  PERSON_MISSING_NAME = 2000,
  PERSON_MISSING_SECRET_IDENTITY = 2001,
  PERSON_MISSING_AGE = 2002,

  PERSON_NAME_INVALID_FORMAT = 2003,
  PERSON_SECRET_IDENTITY_INVALID_FORMAT = 2004,
  PERSON_AGE_INVALID_FORMAT = 2005,

  PERSON_NAME_INVALID_LENGTH = 2006,
  PERSON_SECRET_IDENTITY_INVALID_LENGTH = 2007,
  PERSON_AGE_INVALID_LENGTH = 2008,
}

export function errorFormatter(error: any) { // {location: validatorCheckLocation.Location, param: string, msg: any, value: any}) {
  error.msg = { code: error.msg, msg: ErrorCode[error.msg] };
  if (error.nestedErrors && error.nestedErrors instanceof Array && error.nestedErrors.length > 0) {
    error.nestedErrors = error.nestedErrors.map((err: any) => {
      return { code: err.msg, msg: ErrorCode[err.msg] };
    });
  }
  return error;
}