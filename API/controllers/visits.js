import { insertingUservisit, deletingUserVisits, patchingVisits } from "../../Storage/visitsData.js"

import nedb from "nedb"

var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});



export const getUserVisits = (req, res) =>{
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});

    // db.loadDatabase();

    db.find({}, function (err, docs) {
        res.json(docs);           
    });


};

export const postUserVisits = (req, res) =>{
    // var db = new nedb({ filename: '../Storage/userVisited.db', autoload: true});

    const userVisits = req.body;
    insertingUservisit(userVisits);
    // db.insert(userVisits);
    res.send(userVisits);
};


export const getEmailVisits = (req, res) =>{
    var db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
    // db.loadDatabase();

    const { email } = req.params;
    db.find({ email: email }, function (err, doc) {
        res.json(doc);
    });

};

export const deleteUserVisits = (req, res) =>{
    const { email } = req.params;
    deletingUserVisits( email );
    res.send(`visits has been deleted`);
};

export const patchVisits = (req, res) =>{
    const { email } = req.params;
    const newVisit = req.body;
    patchingVisits( email, newVisit );
    res.send('User has been updated');
};

