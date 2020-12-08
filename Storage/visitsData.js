import nedb from "nedb";
import { userVisits } from "./classes/UserVisits.js"

const db = new nedb({ filename: '../Storage/visitData.db', autoload: true});
db.loadDatabase();

export function insertingUservisit(newUserVisits){
    var email = newUserVisits.email
    var visits = newUserVisits.visits
    var newUserVisit = new userVisits(email, visits)
    db.insert(newUserVisit);
}


export function patchingVisits( email, newVisits ){
    db.remove({ email: email }, {}, function (err, emailRemoved) {
        db.persistence.compactDatafile();
    });

    var newUserVisit = new userVisits()

    for (const [key, value] of Object.entries(newVisits)) {
        newUserVisit[key] = value;
    };

    db.insert(newUserVisit, function(){
        return true;
    });
}







