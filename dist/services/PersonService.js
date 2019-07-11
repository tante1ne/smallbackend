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
const Person_1 = require("./../models/Person");
const req = require("request-promise-native");
const validator_middleware_1 = require("./../middlewares/validator.middleware");
const Person_ValidationService_1 = require("./Person.ValidationService");
class PersonService {
    constructor() {
        this.getOptions = {
            encoding: 'utf8',
            uri: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
            method: 'GET',
            json: true
        };
    }
    getPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield req(this.getOptions);
                return response.members.map((personData) => {
                    return new Person_1.Person(personData);
                });
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    ;
    savePerson() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                ...validator_middleware_1.middleware(Person_ValidationService_1.PersonValidationService.applicationDataValidation()),
                PersonService.post,
            ];
        });
    }
    static post() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let defaultResponse = "saved somewhere";
                return defaultResponse;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    ;
}
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map