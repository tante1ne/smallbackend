import * as express from 'express';
import { PersonService } from "./../services/PersonService";
import { Person } from "./../models/Person";
import { middleware as validatorMiddleWare } from './../middlewares/validator.middleware'
import { PersonValidationService } from './../services/Person.ValidationService'

export class PersonController {

  public static async getPersons(_req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const personService = new PersonService();
      let people = await personService.getPersons();
      return res.json(people).end();

    }
    catch (e) {
      console.error(e);
      return next(e);
    }
  };

  public static apply() : express.RequestHandler [] {
    return [
      ...validatorMiddleWare(PersonValidationService.applicationDataValidation()),
      PersonController.postPersons,
    ];
  }

  public static async postPersons(req: express.Request, res: express.Response, next:express.NextFunction){
    try{
      const personService = new PersonService();
      let defaultResponse = await personService.savePerson();
      let person = new Person(req.body);
      return res.status(201).send({
        succes: 'true',
        message: 'person added succesfully',
        person: person,
        save: defaultResponse
      })
    }
    catch (e) {
      console.error(e);
      return next(e)
    }
  }

}






// export async function getAll(req, res, next){
//     try
//     {await service.}
// }