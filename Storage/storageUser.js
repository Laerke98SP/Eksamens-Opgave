var Datastore = require('nedb');
const database = new Datastore('userDatabase.db');
database.loadDatabase();

database.insert({name: 'Sofie', age: 20});
