import express = require("express");
import {validationResult} from 'express-validator/check'



export function middleware(validators: express.RequestHandler[]=[]):express.RequestHandler[]{
    return [
        ...validators,
        requestHandler,
    ];
}

function requestHandler(req: express.Request, res: express.Response, next: express.NextFunction){
    const errors = validationResult(req).formatWith(errorFormatter);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() }).end();
    }
    return next();
}