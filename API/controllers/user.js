//all actions related to a user
//importing the uuid so we can create id's
// import { v4 as uuidv4 } from "uuid";
//we want to load the data for easy access?
//we want to send the changes back to storage
//should the whole storage be checked? 

import nedb from "nedb";
import { User } from "../classes/User.js"

// var db = {};
const db = new nedb('../Storage/userDatabase.db');
// const db = new nedb('test.db'); 
//havde problemer med at connecte fordi jeg refererede som var jeg i denne
//mappe, men skulle referere som var jeg i index mappen

db.loadDatabase();


export const getUser = (req, res) =>{
    db.find({}, function (err, docs) {
        res.send(docs)
    });
    // res.send(users); 
};

export const postUser = (req, res) =>{
    const user = req.body;

    var newUser = new User()
    // const userWithId = { ...user, id: uuidv4()};  
    //not nessesary since it makes id's itself

    for (const [key, value] of Object.entries(user)) {
        newUser[key] = value;
    };

    db.insert(newUser);
    res.send('User has been added to the database');
};

export const getIdUser = (req, res) =>{
    const { id } = req.params;
    db.find({ _id: id }, function (err, doc) {
        //how to access the specific attributes
        console.log(doc);
    });
    res.send('User has been found')
};

export const deleteUser = (req, res) =>{
    const { id } = req.params;

    db.remove({ _id: id }, {}, function (err, numRemoved) {});

    res.send(`User has been deleted`);
};


export const patchUser = (req, res) =>{
    //should this be in storage?
    const { id } = req.params;
    const { firstName, lastName, dob } = req.body;


    if (firstName){
        db.update({ _id: id }, { $set: { firstName: firstName}}, function (err, numReplaced) {});
    }
    if (lastName){
        db.update({ _id: id }, { $set: { lastName: lastName}}, function (err, numReplaced) {});
    }
    if (dob){
        db.update({ _id: id }, { $set: { dateOfBirth: dob}}, function (err, numReplaced) {});
    }
    res.send('User has been updated');
};

