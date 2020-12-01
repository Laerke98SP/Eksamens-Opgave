var Datastore = require('nedb');
const users = require('../controllers/user')
db = {};
db.users = new Datastore('../../Storage/userDatabase.db');


//call a function that cheks if the format is correct
//if it matches it will be put into the storage




db.users.loadDatabase();
db.users.insert({name: 'Sofie', age: 20});
