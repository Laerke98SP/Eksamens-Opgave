import nedb from "nedb";
// import express from 'express';
import { User } from "./classes/User.js"

const db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});
db.loadDatabase();
// db.loadDatabase();

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
    { firstName, lastName, email, dateOfBirth, password, about }


    var newUser = new User(user.firstName, user.lastName, user.email, user.dateOfBirth, user.password, user.about)

    newUser.calculateAge()

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

export function deletingUser(email){ 
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });
;}


export function patchingUser( email,  editedUser ){
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });

    var newEditUser = new User(editedUser.firstName, editedUser.lastName, editedUser.email, editedUser.dateOfBirth, editedUser.password, editedUser.about)

    db.insert(newEditUser);

    // db.update({ email: email }, { $set: { firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, about: about}}, { multi: true }, function (err, numReplaced) {});


}







