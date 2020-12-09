// Importing nedb for data handeling
import nedb from "nedb"


// ------ Get request to get a potential match that the user has not seen before ------
export const getEmailPotentials = (req, res) =>{
    // Loading the databases from visitData and userDatabase
    var visits = new nedb('../Storage/visitData.db');
    var users = new nedb('../Storage/userDatabase.db');

    // Loading the databases, so they are up to date
    visits.loadDatabase();
    users.loadDatabase();

    // Getting the email as a parameter to user as identifier
    const { email } = req.params;
    
    // Function that first finds the other users the current user has already seen
    visits.find({ email: email }, function (err, visited) {

        // Function for getting every user
        users.find({ }, function (err, user) {

            // Defining data 
            var alreadyVisited = visited[0].visits;
            var i = 0;       
            
            // Forloop to go through every user
            for (i in user){

                // setting up conditional statement that checks if the current potential match is not the user themselves, 
                // and if the potential match has already been visited
                if (alreadyVisited.includes(user[i].email) == false && visited[0].email != user[i].email){
                    res.send(user[i]);

                    // Break statement, since the loop will keep on sending users if not stopped
                    break;
                }
            } 
        });
    });




}