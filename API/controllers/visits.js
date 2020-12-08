import { insertingUservisit, patchingVisits } from "../../Storage/visitsData.js"

import nedb from "nedb"

var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});



export const getUserVisits = (req, res) =>{
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
    db.find({}, function (err, docs) {
        res.json(docs);           
    });
};

export const postUserVisits = (req, res) =>{
    // const email = req.params;
    const userVisits = req.body;
    insertingUservisit(userVisits);
    res.send(userVisits);
};


export const getEmailVisits = (req, res) =>{
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
    const { email } = req.params;
    db.find({ email: email }, function (err, doc) {
        res.json(doc);
    });

};

export const patchVisits = (req, res) =>{
    const { email } = req.params;
    const newVisit = req.body;
    patchingVisits( email, newVisit ); 
    res.send("result");
};

