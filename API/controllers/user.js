import { insertingUser, deletingUser, patchingUser } from "../../Storage/userData.js"
import nedb from "nedb"
var db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});


export const getUser = (req, res) =>{
    db.loadDatabase()
    db.find({}, function (err, docs) {
        res.json(docs);           
    });
};

export const postUser = (req, res) =>{
    const user = req.body;
    insertingUser(user);
    res.send('User has been added to the database');
};

export const getEmailUser = (req, res) =>{
    db.loadDatabase()

    const { email } = req.params;

    db.find({ email: email }, function (err, doc) {
        res.json(doc);
    });
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

