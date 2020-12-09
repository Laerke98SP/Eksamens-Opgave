// Importing datahandeling from storage and nedb for storage handeling 
import { insertingMatch, deletingMatch } from "../../Storage/matchesData.js"
import nedb from "nedb"


// ------- Get request for all matches -------
export const getMatch = (req, res) =>{

    // Loading the database here so it is up to date when user needs it
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
    db.find({}, function (err, docs) {
        res.send(docs);           
    });
};


// ------- Post request for new match -------
export const postMatch = (req, res) =>{
    // Requesting body to get the information about the new match
    const newMatch = req.body;
    
    // Using the function from storage to insert the data
    insertingMatch(newMatch);
    res.send("Match has been created");
};


// ------ Get request for specific match -------
export const getEmailMatch = (req, res) =>{
    // Loading the database to it is up to date
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
    
    // Requesting the email as the identifier
    const { email } = req.params;

    // Finding the specific match with the email
    db.find({ userOneId: email }, function (err, doc) {
        res.json(doc);
    });
};


// ------ Delete request for specific match -------
export const deleteMatch = (req, res) =>{
    // Requesting the id as identifier 
    const { id } = req.params;

    // Using the delete function from storage to handle the delete
    deletingMatch( id );
    res.send(`User has been deleted`);
};
