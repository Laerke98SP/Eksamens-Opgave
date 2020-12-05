// const Datastore = require('nedb');
import nedb from "nedb";




const database = new nedb('database.db');
database.loadDatabase();



class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}




var person = new User("Gustav", "Frelsen");

//database.insert(person);


//how to find a specific person with an attribute
var test = 0
export const hej = database.find({ _id: "KcMIyJvrIXrkyw0V" }, function (err, doc) {
        //how to access the specific attributes
        // console.log(doc[0].firstName);
    res.send(doc)
});
    

console.log(test);



// console.log(test)


// database.find({}, function (err, docs) {
//     console.log(docs)
// });




// database.update({ firstName: 'Sofie' }, { $set: { firstName: 'Louise'}}, function (err, numReplaced) {
//     //erstatter det specifikke parameter, men tager en insert omgang før det bliver ordenligt registreret 
//});



//tjekke for email og password er ens for login
// database.find({ $and: [{ email: 'sof@hotmail.com' }, { password: 'hejmeddig' }] }, function (err, docs) {
//     console.log(docs[0])
// });


// database.remove({ _id: 'epyJzPDBKijAOcTK' }, {}, function (err, numRemoved) {
//     // sletter kun en, man skal sætte andre parametre for at slette flere
//     // tager en kørsel af koden en ekstra gang før at personen bliver slettet
// });




