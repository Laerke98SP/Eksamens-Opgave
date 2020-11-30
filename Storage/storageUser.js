import { postUser } from "../API/controllers/user.js"

const Datastore = require('nedb');


const database = new Datastore('usersDatabase.db');
database.loadDatabase();
database.insert(postUser);
