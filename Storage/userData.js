// Importing nedb for database handeling and the class User from classes folder
import nedb from "nedb";
import { User } from "./classes/User.js"

// Loading the database
const db = new nedb({ filename: '../Storage/userDatabase.db', autoload: true});
db.loadDatabase();


// ------- Inserting new user in database -------
export function insertingUser(user){
    // Inserting the user information as user class
    var newUser = new User(user.firstName, user.lastName, user.email, user.dateOfBirth, user.password, user.about);

    // Inserting new user
    db.insert(newUser);
}

// ------- Deleting a user in database ---------
export function deletingUser(email){ 
    // Finding user with email and deleting them
    db.remove({ email: email }, {}, function (err, emailRemoved) { });
;}

// ------- Patching user with email ---------
export function patchingUser( email,  editedUser ){
    // Removing the old user so no duplicates
    db.remove({ email: email }, {}, function (err, emailRemoved) { });

    // Create edited user as User class
    var newEditUser = new User(editedUser.firstName, editedUser.lastName, editedUser.email, editedUser.dateOfBirth, editedUser.password, editedUser.about)

    // Inserting edited user in database
    db.insert(newEditUser);
}







