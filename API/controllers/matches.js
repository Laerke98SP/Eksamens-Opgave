//all actions related to a user
import { insertingMatch, deletingMatch } from "../../Storage/matchesData.js"
import nedb from "nedb"

export const getMatch = (req, res) =>{
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
    db.find({}, function (err, docs) {
        res.send(docs);           
    });
};

export const postMatch = (req, res) =>{
    const newMatch = req.body;
    insertingMatch(newMatch);
    res.send("Match has been created");
};

export const getEmailMatch = (req, res) =>{
    const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
    const { email } = req.params;
    db.find({ userOneId: email }, function (err, doc) {
        res.json(doc);
    });
};

export const deleteMatch = (req, res) =>{
    const { id } = req.params;
    deletingMatch( id );
    res.send(`User has been deleted`);
};
