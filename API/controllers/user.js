import { insertingUser, deletingUser, patchingUser } from "../../Storage/userData.js"
// import { insertingUser, gettingUser, findingIdUser, findingEmailUser, deletingUser, patchingUser } from "../../Storage/userData.js"

// import fs from 'fs';
import nedb from "nedb"
var db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});

// var db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});
// db.loadDatabase();

// export const getHomePage = (req, res) => {  // Hver gang denne path med http verb bliver kaldt, så vil vi starte en fubnktion med 2 parametrer, req & res
//         fs.readFile(__dirname + '/client/Login.html', 'utf8', function(err, text){
//              res.send(text);
//          });


export const getUser = (req, res) =>{
    //databasen bliver loaded hver gang, ellers bruger den ikke den opdaterede version 
    db.loadDatabase()
    // console.log(gettingUser())
    // res.send("something happened");
    // db.find({}, function (err, docs) {
    //     res.json(docs);
    // })
    // console.log(gettingUser(res))

    db.find({}, function (err, docs) {
        res.json(docs);           
    });


};

export const postUser = (req, res) =>{
    const user = req.body;
    insertingUser(user);
    // return req.redirect("./matches.js");
    // fs.readFile('../Frontend/user/userPage.html', 'utf8', function(err, text){
    //     res.send(text);
    // });

    res.send('User has been added to the database');
};

// export const getIdUser = (req, res) =>{
//     const { email } = req.params;

//     db.find({ email: email }, function (err, doc) {
//         res.json(doc);
//     });

//     // findingIdUser(id);
//     // res.send('User has been found');
// };

export const getEmailUser = (req, res) =>{
    db.loadDatabase()

    const { email } = req.params;

    db.find({ email: email }, function (err, doc) {
        //få den til at handle direkte med frontend
        res.json(doc);
    });

    // findingEmailUser(email);
    // res.send('User has been found');
};

export const deleteUser = (req, res) =>{
    const { email } = req.params;

    deletingUser( email );
    res.send(`User has been deleted`);
};

export const patchUser = (req, res) =>{
    const { email } = req.params;
    const editedUser = req.body;

    patchingUser( email, editedUser );

    res.send('User has been updated');
};

