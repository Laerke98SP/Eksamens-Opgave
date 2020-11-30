const Datastore = require('nedb');


const database = new Datastore('database.db');
database.loadDatabase();
database.insert({name: 'Sofie', age: 20});
database.insert({name: 'Anna', age: 20});

