"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PersonService_1 = require("./../services/PersonService");
const Person_1 = require("./../models/Person");
const validator_middleware_1 = require("./../middlewares/validator.middleware");
const Person_ValidationService_1 = require("./../services/Person.ValidationService");
class PersonController {
    static getPersons(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personService = new PersonService_1.PersonService();
                let people = yield personService.getPersons();
                return res.json(people).end();
            }
            catch (e) {
                console.error(e);
                return next(e);
            }
        });
    }
    ;
    static apply() {
        return [
            ...validator_middleware_1.middleware(Person_ValidationService_1.PersonValidationService.applicationDataValidation()),
            PersonController.postPersons,
        ];
    }
    static postPersons(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personService = new PersonService_1.PersonService();
                let defaultResponse = yield personService.savePerson();
                let person = new Person_1.Person(req.body);
                return res.status(201).send({
                    succes: 'true',
                    message: 'person added succesfully',
                    person: person,
                    save: defaultResponse
                });
            }
            catch (e) {
                console.error(e);
                return next(e);
            }
        });
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=PersonController.js.map