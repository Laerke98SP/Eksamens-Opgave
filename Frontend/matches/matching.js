
function fetchMatch(){
    // Getting email from local storage
    var email = localStorage.getItem("email");

    // Fetching the potential user from potential endpoint, using the email
    fetch(`http://localhost:5000/potentials/${email}`).then((resp) => resp.json()).then(function(potential){
        // Potential match email gets saved in local storage
        localStorage.setItem("current", potential.email);

        // Editing the infromation to display on page
        var fullName = potential.firstName + " " + potential.lastName;
        var dob = potential.dateOfBirth;

        // Function calculate age gets called
        var age = calculateAge(dob);

        // Defining the values showed to user
        document.getElementById('userFullName').innerHTML = fullName;
        document.getElementById('age').innerHTML = age + " år";
        document.getElementById('email').innerHTML = potential.email;
        document.getElementById('about').innerHTML = potential.about;
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

function yes(){
    // Function for when user likes another profile 

    // Mails from both users is retrieved from local storage
    var userOneId = localStorage.getItem("email");
    var userTwoId = localStorage.getItem("current");

    // Match object is created
    var newMatch = { userOneId, userTwoId };

    // addVisit function is called
    addVisit(userOneId, userTwoId);

    // API request created as post, with newMatch stringyfied in the body
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    };

    // Fetching the match endpoint with the options
    fetch('http://localhost:5000/match', options);

    return false;
}



function addVisit(email, matchUser){
    // Fetching the specific user visits endpoint with the email
    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visiting){
        // New variable declared and set equal to previous visits
        var visits = visiting[0].visits;

        // New visit pushed into array
        visits.push(matchUser);

        // newVisit object created
        var newVisit =  { email, visits };

        // Creating the API request as patch with the newVisit stringifyed
        var options = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newVisit),
        };
        
        // Fetch called on the visits endpoint with specific email 
        fetch(`http://localhost:5000/visits/${email}`, options).then(function () {
            // Delay so visits actually gets updated
            setTimeout(function(){
                fetchMatch();
            }, 1000); 
        });
    });
};

function no(){
    // Function of user dislikes potential match 

    // Getting rhe emails for both users
    var email = localStorage.getItem("email");
    var matchUser = localStorage.getItem("current");

    // Fetching the specific user visits endpoint with the email
    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visiting){
        // New variable declared and set equal to previous visits
        var visits = visiting[0].visits;

        // New visit pushed into array
        visits.push(matchUser);
    
        // Creating the API request as patch with the newVisit stringifyed
        console.log(visits);
        var newVisit =  { email, visits };
        var options = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newVisit),
        };
        
        // Fetch called on the visits endpoint with specific email 
        fetch(`http://localhost:5000/visits/${email}`, options).then(function () {
            // Delay so visits actually gets updated
            setTimeout(function(){
                fetchMatch();
            }, 500); 
        });
    });    
}