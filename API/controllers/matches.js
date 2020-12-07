//all actions related to a user
import { insertingMatch, deletingMatch } from "../../Storage/matchesData.js"
import nedb from "nedb"

// const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});


//importing the uuid so we can create id's
// import { v4 as uuidv4 } from "uuid";

// const matches = [];

export const getMatch = (req, res) =>{
    // db.loadDatabase()
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});


    db.find({}, function (err, docs) {
        res.json(docs);           
    });
};

export const postMatch = (req, res) =>{
    const newMatch = req.body;
    insertingMatch(newMatch);
    // db.insert(userVisits);
    res.send("Match has been created");
};

export const getEmailMatch = (req, res) =>{
    // db.loadDatabase()
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});


    const { email } = req.params;

    db.find({ email: email }, function (err, doc) {
        //få den til at handle direkte med frontend
        res.json(doc);
    });
};

export const deleteMatch = (req, res) =>{
    const { id } = req.params;

    deletingMatch( id );
    res.send(`User has been deleted`);
};


export const patchMatch = (req, res) =>{
    //should this be in storage?
    //is this relevant for a match
    res.send(`Match with the has been updated`);
};