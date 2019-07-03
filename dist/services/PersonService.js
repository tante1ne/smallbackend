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
class PersonService {
    constructor() {
        this.options = {
            encoding: 'utf8',
            uri: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
            method: 'GET',
            json: true
        };
    }
    getPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield req(this.options);
                return response.members.map((personData) => {
                    return new Person_1.Person(personData);
                });
            }
            catch (err) {
                throw new Error(err);
                console.log(err);
            }
        });
    }
}
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map