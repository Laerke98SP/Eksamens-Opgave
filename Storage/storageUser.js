//var Datastore = require('nedb');

import nedb from "nedb";


const databases = new nedb('userDatabase.db');
databases.loadDatabase();

// function findingUser(ids){
//     database.find({ _id: ids }, function (err, doc) {
//         var hej = doc[0];
//     })
// }


export const findingUser = database.find({ _id: ids }, function (err, doc) {})






