 
function gettingMatches(){
    // Getting email from local storage
    var email = localStorage.getItem("email");

    // Getting the matches inked to the user email
    fetch(`http://localhost:5000/match/${email}`).then((resp) => resp.json()).then(function(match){
        // Creating a forloop that iterates through matches
        for (i in match){
            // Saving the matched profiles email and saving the match id
            var matchEmail = match[i].userTwoId;
            const id = match[i]._id

            // Getting the matched user
            fetch(`http://localhost:5000/user/${matchEmail}`).then((resp) => resp.json()).then(function(user){
                for (j in user){
                    // Calling calculateAge
                    var age = calculateAge(user[j].dateOfBirth);

                    // Creating full name
                    var fullName = user[j].firstName + " " + user[j].lastName;

                    // Calling matches function
                    matches(fullName, age, id)
                };
            });
        };
    });
};

function calculateAge(dob){
    // Splitting the string to get day, month and year information
    let [y, m, d] = dob.split("-");

    // Converting from string to number
    let year = Number(y)
    let month = Number(m)
    let day = Number(d)

    // Calculating the age and returning it
    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function matches(name, age, id){
    // Creating html elements
    const holder = document.createElement('div');
    const matchName = document.createElement('h2');
    const matchAge = document.createElement('h4');
    const deleteMatch = document.createElement('button');

    // Inserting values in html elements
    const nameTxt = document.createTextNode(name);
    const ageTxt = document.createTextNode(age);
    const buttonTxt = document.createTextNode('Slet match');

    // Defining id's
    holder.id = 'matchHolder';
    matchName.id = 'matchName';
    matchAge.id = 'matchAge';
    deleteMatch.id = 'deleteMatch';

    // Defining button class as match id
    deleteMatch.className = id;

    // Creating function that runs onClick
    deleteMatch.onclick = function() {
        // Getting the id from the classname
        var id = deleteMatch.className

        // Creating API delete request
        const options = { 
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            }
        }

        // Contacting match api with id
        fetch(`http://localhost:5000/match/${id}`, options).then(function () {
            // Delay function so data has time to update 
            setTimeout(function(){
            }, 1000);
        });
    };

    // Inserting text into elements
    matchName.appendChild(nameTxt);
    matchAge.appendChild(ageTxt);
    deleteMatch.appendChild(buttonTxt);

    // Inserting elements into div
    holder.appendChild(matchName);
    holder.appendChild(matchAge);
    holder.appendChild(deleteMatch);

    // Insert the final match display
    document.body.appendChild(holder);
};
