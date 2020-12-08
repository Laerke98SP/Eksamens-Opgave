
function fetchMatch(){
    console.log("fetching match");
    var email = localStorage.getItem("email");

    fetch(`http://localhost:5000/potentials/${email}`).then((resp) => resp.json()).then(function(potential){

        // alert(potential.email)

        localStorage.setItem("current", potential.email);
        console.log("match found: " + potential.email);

        var fullName = potential.firstName + " " + potential.lastName;
        var dob = potential.dateOfBirth;
        var age = calculateAge(dob);
        document.getElementById('userFullName').innerHTML = fullName;
        document.getElementById('age').innerHTML = age + " år";
        document.getElementById('email').innerHTML = potential.email;
        document.getElementById('interest').innerHTML = "interest";
        document.getElementById('about').innerHTML = potential.about;

        console.log("UI updated");
    });
};

function calculateAge(dob){
    let [y, m, d] = dob.split("-");
    let year = Number(y)
    let month = Number(m)
    let day = Number(d)

    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}

function yes(){
    console.log("yes was pressed")


    var userOneId = localStorage.getItem("email");
    var userTwoId = localStorage.getItem("current");
    // var userTwoId = "hello";

    console.log("userOneId: " + userOneId)
    console.log("userTwoId: " + userTwoId)



    // alert(matchUser)

    var newMatch = { userOneId, userTwoId };

    addVisit(userOneId, userTwoId);

    console.log("visit saved")

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    };

    fetch('http://localhost:5000/match', options);

    console.log("match saved")

    return false;
}



function addVisit(email, matchUser){
    // alert (matchUser)
    console.log("adding visit")

    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visiting){
        var visits = visiting[0].visits;
        visits.push(matchUser);
        // visits.push();

        console.log(visits);

        var newVisit =  { email, visits };
        var options = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newVisit),
        };
    
        fetch(`http://localhost:5000/visits/${email}`, options).then(function () {
            setTimeout(function(){
                fetchMatch();
            }, 500); //delay so visits actually gets updated
            
        });


    });

    console.log("ready to fetch match")


};