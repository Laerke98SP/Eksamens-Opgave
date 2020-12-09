// Importing database handlers from storage and nedb for direct data handeling 
import { insertingUser, deletingUser, patchingUser } from "../../Storage/userData.js"
import nedb from "nedb"

// Loading the userDatabase
var db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});

// ------ Get request for all users -------
export const getUser = (req, res) =>{
    // Loading the database, so it is up to date
    db.loadDatabase()

    // Finding every user and sending them
    db.find({}, function (err, docs) {
        if (err){
            res.send("Could not find users");
        } else {
            res.json(docs);
        };         
    });
};

// ------- Post request for new user -------
export const postUser = (req, res) =>{
    // Requesting the body to add new user
    const user = req.body;

    // Using function from storage to insert the ned user in database
    insertingUser(user);
    res.send('User has been added to the database');
};

// ------ Get specific user ---------
export const getEmailUser = (req, res) =>{
    // Loading the database so it is up to date
    db.loadDatabase()

    // Reguesting the email from the parameter as identifier 
    const { email } = req.params;

    // Finding the specific user, with the email
    db.find({ email: email }, function (err, doc) {
        if (err){
            res.send("Could not find user with email");
        } else {
            res.json(doc);
        };
    });
};

// ------ Delete request for specific user -------
export const deleteUser = (req, res) =>{
    // Requesting the email from the parameters
    const { email } = req.params;

    // Using the delete function from storage 
    deletingUser( email );
    res.json(`User has been deleted`);
};

// ------ Patch request for specific user -------
export const patchUser = (req, res) =>{
    // Requesting the parameter to get an identifier
    const { email } = req.params;

    // Requesting the body to get the new changes
    const editedUser = req.body;

    // Using the patch function from storage
    patchingUser( email, editedUser );
    res.send('User has been updated');
};

