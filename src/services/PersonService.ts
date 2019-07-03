import { Person } from "./../models/Person";
// import { PersonController } from "controllers/PersonController";
import * as req from 'request-promise-native'
// import * as express from 'express'

// import {Person} from '@models/Person';

export class PersonService {

    private options = {
        encoding: 'utf8',
        uri: 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
        method: 'GET',
        json: true
    }

    public async getPersons(): Promise<Person[]> {

        try{
            const response = await req(this.options)
            return response.members.map((personData: any) => {
                return new Person(personData);
            })
        }
        catch(err){
            throw new Error(err);
            console.log(err);
        }
        
    }
}