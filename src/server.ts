// import dotenv from "dotenv";
import * as express from "express";
// import path from "path";
import {router} from "./routes";

// dotenv.config();

const port = 2020;

const app = express();
app.use('/', router);

app.listen( port, () => {
    //tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }` );
});