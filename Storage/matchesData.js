// Importing nedb for database handeling and match from classes folder
import nedb from "nedb";
import { Match } from "./classes/Match.js"

// Loading the database
const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
db.loadDatabase();


// -------- Inserting new match in database ----------
export function insertingMatch(match){
    // Creating match class 
    var newMatch = new Match( match.userOneId, match.userTwoId)

    // inserting the new match class
    db.insert(newMatch);
}

// -------- Deleting match in database ---------
export function deletingMatch(id){ 
    // Deleting match with a specific id
    db.remove({ _id: id }, {}, function (err, emailRemoved) { });
;}








