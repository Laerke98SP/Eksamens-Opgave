// Importing functions from storage and nedb for datahandeling
import { insertingUservisit, patchingVisits } from "../../Storage/visitsData.js"
import nedb from "nedb"

// ------ Get request for all users ------
export const getUserVisits = (req, res) =>{
    // Loading the visitData to get an updated database
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});

    // Sending every users visitdata
    db.find({}, function (err, docs) {
        res.json(docs);           
    });
};

// ------ Post request for new user -------
export const postUserVisits = (req, res) =>{
    // Requesting the body to get neccesary information
    const userVisits = req.body;

    // Using function from Storage to post users visits
    insertingUservisit(userVisits);
    res.send(userVisits);
};

// ------- Get request for specific visit -------
export const getEmailVisits = (req, res) =>{
    // Loading the visitData so it is up to date
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});

    // Requesting the parameter to get the identifier
    const { email } = req.params;

    // Finding the specific users visits
    db.find({ email: email }, function (err, doc) {
        res.json(doc);
    });

};

// ------- Patch request for specific user visit -------
export const patchVisits = (req, res) =>{
    // Parameters requested for identifier 
    const { email } = req.params;

    // Body requested for what needed to change 
    const newVisit = req.body;

    // Using function from storage for patch visit
    patchingVisits( email, newVisit ); 
    res.send("result");
};

