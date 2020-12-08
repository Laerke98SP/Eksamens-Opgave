import nedb from "nedb";
// import express from 'express';
import { User } from "./classes/User.js"

const db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});
db.loadDatabase();

export function insertingUser(user){
    var newUser = new User(user.firstName, user.lastName, user.email, user.dateOfBirth, user.password, user.about);
    db.insert(newUser);
}

export function deletingUser(email){ 
    db.remove({ email: email }, {}, function (err, emailRemoved) { });
;}

export function patchingUser( email,  editedUser ){
    db.remove({ email: email }, {}, function (err, emailRemoved) { });
    var newEditUser = new User(editedUser.firstName, editedUser.lastName, editedUser.email, editedUser.dateOfBirth, editedUser.password, editedUser.about)
    db.insert(newEditUser);
}







