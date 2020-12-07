import nedb from "nedb";
// import express from 'express';
import { Match } from "./classes/Match.js"

const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
db.loadDatabase();


export function insertingMatch(match){
    var newMatch = new Match()

    for (const [key, value] of Object.entries(match)) {
        newMatch[key] = value;
    };

    // newUser.calculateAge()

    db.insert(newMatch);
}

export function deletingMatch(id){ 
    db.remove({ _id: id }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });
;}



// ---------Do i need patch here?-------------//
export function patchingUser( email,  editedUser ){
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });

    var newUser = new User()

    for (const [key, value] of Object.entries(editedUser)) {
        newUser[key] = value;
    };

    // newUser.calculateAge()

    db.insert(newUser);

    // db.update({ email: email }, { $set: { firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, about: about}}, { multi: true }, function (err, numReplaced) {});


}







