// Importing nedb to handle database and importing the class userVisits from classes folder
import nedb from "nedb";
import { UserVisits } from "./classes/UserVisits.js"

// Loading the database
const db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
db.loadDatabase();


// ------ Inserting a users visits --------
export function insertingUservisit(newUserVisits){
    var email = newUserVisits.email
    var visits = newUserVisits.visits

    // Creating a userVisit class
    var newUserVisit = new UserVisits(email, visits)

    // Inserting the user visit in database
    db.insert(newUserVisit);
}


// ------- Patch function for userVisits -------
export function patchingVisits( email, newVisits ){
    // Deleting previous user visit data, so no duplicates
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        // db.persistence.compactDatafile();
    });

    var email = newVisits.email
    var visits = newVisits.visits

    // Creating a userVisit class
    var newUserVisit = new UserVisits(email, visits)

    // Inserting the user visit in database
    db.insert(newUserVisit);
}







