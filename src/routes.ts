import * as express from 'express';
import { PersonController } from './controllers/PersonController';


export const router = express.Router();

//person route -- get
router.get('/person', PersonController.getPersons);
    