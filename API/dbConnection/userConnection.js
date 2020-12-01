var Datastore = require('nedb');
db = {};
db.users = new Datastore('../../Storage/userDatabase.db');

db.users.loadDatabase();
db.users.insert({name: 'Sofie', age: 20});
