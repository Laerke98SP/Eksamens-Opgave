const Datastore = require('nedb');


const database = new Datastore('database.db');
database.loadDatabase();

database.findOne({ _id: "wy27WThlVM2Y5gzk" }, function (err, doc) {
    // doc is the document Mars
    // If no document is found, doc is null
    doc._id = "hej"
    console.log(doc)
});


