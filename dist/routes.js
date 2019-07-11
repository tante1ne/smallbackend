"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PersonController_1 = require("./controllers/PersonController");
exports.router = express.Router();
exports.router.get('/person', PersonController_1.PersonController.getPersons);
exports.router.post('/person', PersonController_1.PersonController.apply);
//# sourceMappingURL=routes.js.map