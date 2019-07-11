import express = require("express");
import { body } from 'express-validator';
import { ErrorCode } from "./../lib/error-codes.enum";
// import { ErrorCode } from "lib/error-codes.enum";

export class PersonValidationService {

  public static applicationDataValidation(): express.RequestHandler[] {
    return [
      body('name')
        .exists()
        .withMessage(ErrorCode.PERSON_MISSING_NAME)
        .isString()
        .withMessage(ErrorCode.PERSON_NAME_INVALID_FORMAT)
        .isLength({ min: 1 })
        .withMessage(ErrorCode.PERSON_NAME_INVALID_LENGTH),
      body('age')
      .exists()
      .withMessage(ErrorCode.PERSON_MISSING_AGE)
      .isNumeric()
      .withMessage(ErrorCode.PERSON_AGE_INVALID_FORMAT),
      body('secretIdentity')
        .exists()
        .withMessage(ErrorCode.PERSON_MISSING_SECRET_IDENTITY)
        .isString()
        .withMessage(ErrorCode.PERSON_SECRET_IDENTITY_INVALID_FORMAT)
        .isLength({ min: 1 })
        .withMessage(ErrorCode.PERSON_SECRET_IDENTITY_INVALID_LENGTH),
    ];
  }

}