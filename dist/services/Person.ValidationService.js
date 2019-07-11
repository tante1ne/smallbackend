"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
const error_codes_enum_1 = require("./../lib/error-codes.enum");
class PersonValidationService {
    static applicationDataValidation() {
        return [
            check_1.body('name')
                .exists()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_MISSING_NAME)
                .isString()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_NAME_INVALID_FORMAT)
                .isLength({ min: 1 })
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_NAME_INVALID_LENGTH),
            check_1.body('age')
                .exists()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_MISSING_AGE)
                .isNumeric()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_AGE_INVALID_FORMAT),
            check_1.body('secretIdentity')
                .exists()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_MISSING_SECRET_IDENTITY)
                .isString()
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_SECRET_IDENTITY_INVALID_FORMAT)
                .isLength({ min: 1 })
                .withMessage(error_codes_enum_1.ErrorCode.PERSON_SECRET_IDENTITY_INVALID_LENGTH),
        ];
    }
}
exports.PersonValidationService = PersonValidationService;
//# sourceMappingURL=Person.ValidationService.js.map