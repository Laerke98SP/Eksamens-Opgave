
import nedb from "nedb"


// export const getPotentials = (req, res) =>{
//     res.send("hello")

// }

export const getEmailPotentials = (req, res) =>{
    //hente visits hvor brugerid = email
    //hente alle brugere
    //finde bruger der ikke er i visits

    var visits = new nedb('../Storage/visitData.db');
    var users = new nedb('../Storage/userDatabase.db');

    visits.loadDatabase();
    users.loadDatabase();

    const { email } = req.params;
    
    visits.find({ email: email }, function (err, visited) {
        users.find({ }, function (err, user) {
            // res.send(visited.visits)
            var alreadyVisited = visited[0].visits

            // res.send(alreadyVisited)
            var i = 0;
            // res.send(visited)
            
            for (i in user){
                if (alreadyVisited.includes(user[i].email) == false && visited[0].email != user[i].email){
                    res.send(user[i]);
                    break;
                }
            } 

        });
    });




}