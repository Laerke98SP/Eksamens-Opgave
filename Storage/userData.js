import nedb from "nedb";
import { User } from "./classes/User.js"

const db = new nedb('../Storage/userDatabase.db');
db.loadDatabase();

export function gettingUser(){
    db.find({}, function (err, docs) {
        //skal kontakte frontend direkte og vise det der skal vises
    });
}

export function insertingUser(user){
    var newUser = new User()
    for (const [key, value] of Object.entries(user)) {
        newUser[key] = value;
    };
    db.insert(newUser);
}

export function findingIdUser(id){
    return db.find({ _id: id }, function (err, doc) {
        //få den til at handle direkte med frontend
    });
}

export function deletingUser(id){ db.remove({ _id: id }, {}, function (err, numRemoved) {}); }

export function patchingUser(id, firstName, lastName, dateOfBirth){
    if (firstName){ db.update({ _id: id }, { $set: { firstName: firstName}}, function (err, numReplaced) {}); }
    if (lastName){ db.update({ _id: id }, { $set: { lastName: lastName}}, function (err, numReplaced) {}); }
    if (dateOfBirth){ db.update({ _id: id }, { $set: { dateOfBirth: dateOfBirth}}, function (err, numReplaced) {}); }
}







