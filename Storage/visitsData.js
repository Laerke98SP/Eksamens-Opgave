import nedb from "nedb";
// import express from 'express';
import { userVisits } from "./classes/UserVisits.js"

const db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
db.loadDatabase();

export function insertingUservisit(newUserVisits){
    //format should be {email: "", visits:[]}
    var email = newUserVisits.email
    var visits = newUserVisits.visits
    var newUserVisit = new userVisits(email, visits)
    db.insert(newUserVisit);
}

export function deletingUserVisits(email){ 
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });
;}


export function patchingVisits( email, newVisits ){
    // expect newVisits to have both old and new visits in array
    // db.loadDatabase();

    // db.findOne({email: email}, function (err, docs) {
    //     docs.visits.push(newVisits)      
    //     db.update({_id: docs._id}, {$set: {visits: docs.visits}}, function(err, doc){

    //     })     
    // });



    db.remove({ email: email }, {}, function (err, emailRemoved) {
        db.persistence.compactDatafile();
    });

    var newUserVisit = new userVisits()

    for (const [key, value] of Object.entries(newVisits)) {
        newUserVisit[key] = value;
    };

    db.insert(newUserVisit, function(){
        return true;
    });
}







