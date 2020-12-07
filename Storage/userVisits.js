import nedb from "nedb";
// import express from 'express';
import { userVisits } from "./classes/UserVisits.js"

const db = new nedb({ filename: '../Storage/userVisited.db', autoload: true});
db.loadDatabase();

export function insertingUservisit(newUserVisits){
    //format should be {email: "", visits:[]}
    var newUserVisit = new userVisits()

    for (const [key, value] of Object.entries(newUserVisits)) {
        newUserVisit[key] = value;
    };

    db.insert(newUserVisits);
}

export function deletingUserVisits(email){ 
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });
;}


export function patchingVisits( email,  newVisits ){
    // expect newVisits to have both old and new visits in array

    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });

    var newUserVisit = new userVisits()

    for (const [key, value] of Object.entries(newVisits)) {
        newUserVisit[key] = value;
    };

    db.insert(newUserVisit);
}







