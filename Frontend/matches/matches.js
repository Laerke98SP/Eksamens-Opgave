// hent alle matches der har noget at gøre med givne mail. 
// hent brugere alt efter hvilket match der først dukker op 
function gettingMatches(){
    var email = localStorage.getItem("email");
    console.log("finding user email")

    fetch(`http://localhost:5000/match/${email}`).then((resp) => resp.json()).then(function(match){
        for (i in match){
            var matchEmail = match[i].userTwoId;
            const id = match[i]._id
            fetch(`http://localhost:5000/user/${matchEmail}`).then((resp) => resp.json()).then(function(user){
                for (j in user){
                    var age = calculateAge(user[j].dateOfBirth);

                    var fullName = user[j].firstName + " " + user[j].lastName;

                    matches(fullName, age, id)
                };
            });
        };
    });
};

function calculateAge(dob){
    let [y, m, d] = dob.split("-");
    let year = Number(y);
    let month = Number(m);
    let day = Number(d);

    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function matches(name, age, id){
    console.log("got information to post: " + name)
    const holder = document.createElement('div');
    const matchName = document.createElement('h2');
    const matchAge = document.createElement('h4');
    const deleteMatch = document.createElement('button');

    const nameTxt = document.createTextNode(name);
    const ageTxt = document.createTextNode(age);
    const buttonTxt = document.createTextNode('Slet match');

    holder.id = 'matchHolder';
    matchName.id = 'matchName';
    matchAge.id = 'matchAge';
    deleteMatch.id = 'deleteMatch';

    deleteMatch.className = id;

    deleteMatch.onclick = function() {
        var id = deleteMatch.className

        const options = { 
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            }
        }

        fetch(`http://localhost:5000/match/${id}`, options).then(function () {
            setTimeout(function(){
                // gettingMatches();
            }, 1000);
        });
    };

    // console.log("id's created")


    matchName.appendChild(nameTxt);
    matchAge.appendChild(ageTxt);
    deleteMatch.appendChild(buttonTxt);


    holder.appendChild(matchName);
    holder.appendChild(matchAge);
    holder.appendChild(deleteMatch);

    document.body.appendChild(holder);
};
