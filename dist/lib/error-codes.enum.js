"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["PERSON_MISSING_NAME"] = 2000] = "PERSON_MISSING_NAME";
    ErrorCode[ErrorCode["PERSON_MISSING_SECRET_IDENTITY"] = 2001] = "PERSON_MISSING_SECRET_IDENTITY";
    ErrorCode[ErrorCode["PERSON_MISSING_AGE"] = 2002] = "PERSON_MISSING_AGE";
    ErrorCode[ErrorCode["PERSON_NAME_INVALID_FORMAT"] = 2003] = "PERSON_NAME_INVALID_FORMAT";
    ErrorCode[ErrorCode["PERSON_SECRET_IDENTITY_INVALID_FORMAT"] = 2004] = "PERSON_SECRET_IDENTITY_INVALID_FORMAT";
    ErrorCode[ErrorCode["PERSON_AGE_INVALID_FORMAT"] = 2005] = "PERSON_AGE_INVALID_FORMAT";
    ErrorCode[ErrorCode["PERSON_NAME_INVALID_LENGTH"] = 2006] = "PERSON_NAME_INVALID_LENGTH";
    ErrorCode[ErrorCode["PERSON_SECRET_IDENTITY_INVALID_LENGTH"] = 2007] = "PERSON_SECRET_IDENTITY_INVALID_LENGTH";
    ErrorCode[ErrorCode["PERSON_AGE_INVALID_LENGTH"] = 2008] = "PERSON_AGE_INVALID_LENGTH";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
function errorFormatter(error) {
    error.msg = { code: error.msg, msg: ErrorCode[error.msg] };
    if (error.nestedErrors && error.nestedErrors instanceof Array && error.nestedErrors.length > 0) {
        error.nestedErrors = error.nestedErrors.map((err) => {
            return { code: err.msg, msg: ErrorCode[err.msg] };
        });
    }
    return error;
}
exports.errorFormatter = errorFormatter;
//# sourceMappingURL=error-codes.enum.js.map