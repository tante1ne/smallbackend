import { Person } from "./../models/Person";
import * as req from 'request-promise-native'
import {middleware as validatorMiddleware} from './../middlewares/validator.middleware'
import { PersonValidationService } from "./Person.ValidationService";

export class PersonService {

  private getOptions = {
    encoding: 'utf8',
    uri: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
    method: 'GET',
    json: true
  }

  // private postOptions = {
  //   // encoding: 'utf8',
  //   method: 'POST',
  //   uri: 'localhost:2020/person',
  //   data : {
  //     firstName: 'janneman',
  //     lastName: 'robinson',
  //     age: 42
  //   },
  //   json: true

  // }

  public async getPersons(): Promise<Person[]> {

    try {
      const response = await req(this.getOptions)
      return response.members.map((personData: any) => {
        return new Person(personData);
      })
    }
    catch (err) {
      throw new Error(err);
    }
  };

  public async savePerson(){
    return [
      ...validatorMiddleware(PersonValidationService.applicationDataValidation()),
      PersonService.post,
    ];
  }

  private static async post(){
    try {
      let defaultResponse = "saved somewhere";
      return defaultResponse;
    }
    catch(err){
      throw new Error(err);
    }
  };

  // public async postPersons(): Promise<Person> {
  //   try {
  //    return res.send('hello');
  //   }
  //   catch (err) {
  //     throw new Error(err);
  //   }
  // }
}