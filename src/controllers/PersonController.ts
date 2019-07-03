import * as express from 'express';
import { PersonService } from "./../services/PersonService";
import { Person } from "./../models/Person";

export class PersonController {
  p = Person;

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

}






// export async function getAll(req, res, next){
//     try
//     {await service.}
// }