import nedb from "nedb";
// import express from 'express';
import { User } from "./classes/User.js"

const db = new nedb('../Storage/userDatabase.db');
db.loadDatabase();

// export function gettingUser().then(function(err, data) {
//     res.json(data);
// });

    // db.find({}, function (err, docs) {
    //     //skal kontakte frontend direkte og vise det der skal vises
        
    // });


// export const gettingUser = (req, res) =>{
//     db.find({}, function (err, docs) {
//         return res.json(docs);
//     });
// };



export function insertingUser(user){
    var newUser = new User()

    for (const [key, value] of Object.entries(user)) {
        newUser[key] = value;
    };

    // newUser.calculateAge()

    db.insert(newUser);
}

// export function findingIdUser(id){
//     db.find({ _id: id }, function (err, doc) {
//         return doc 
//     });


//     // Id = req.id 
// }



// export function findingEmailUser(email){
//     return db.find({ email: email }, function (err, doc) {
//         //få den til at handle direkte med frontend
//         console.log(doc);
//     });
// }

export function deletingUser(email){ db.remove({ email: email }, {}, function (err, emailRemoved) { console.log("User have been deleted")});}

export function patchingUser(email, firstName, lastName, dateOfBirth){
    if (firstName){ db.update({ emai: email }, { $set: { firstName: firstName}}, function (err, numReplaced) {}); }
    if (lastName){ db.update({ emai: email }, { $set: { lastName: lastName}}, function (err, numReplaced) {}); }
    if (dateOfBirth){ db.update({ emai: email }, { $set: { dateOfBirth: dateOfBirth}}, function (err, numReplaced) {}); }
}







