"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const error_codes_enum_1 = require("./../lib/error-codes.enum");
function middleware(validators = []) {
    return [
        ...validators,
        requestHandler,
    ];
}
exports.middleware = middleware;
function requestHandler(req, res, next) {
    const errors = express_validator_1.validationResult(req).formatWith(error_codes_enum_1.errorFormatter);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() }).end();
    }
    next();
}
//# sourceMappingURL=validator.middleware.js.map