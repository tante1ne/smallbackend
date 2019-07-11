import * as express from 'express';
import { PersonController } from './controllers/PersonController';


export const router = express.Router();

//persons route -- get
router.get('/person', PersonController.getPersons);
//person route --post
router.post('/person', PersonController.apply);
    