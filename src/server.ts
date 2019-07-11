// import dotenv from "dotenv";
import * as express from "express";
// import path from "path";
import {router} from "./routes";
import bodyParser = require("body-parser");

// dotenv.config();

const port = 2020;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended : false }));
app.use('/', router);

app.listen( port, () => {
    //tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }` );
});