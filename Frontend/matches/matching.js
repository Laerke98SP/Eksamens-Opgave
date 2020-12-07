
var email = localStorage.getItem("email");

fetch(`http://localhost:5000/user`).then((resp) => resp.json()).then(function(data) {

    // alert(data[1].email)

    // var i = 0;

    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visits){
        // var i = 0
        for (i in data){
            // alert(visits[0].visits.includes(data[i].email))
            // alert(visits[0].visits)
            if (data[i].email == email){
                continue;
            } else if (visits[0].visits.includes(data[i].email) == false) {
                var fullName = data[i].firstName + " " + data[i].lastName;
                var dob = data[i].dateOfBirth;
                var age = calculateAge(dob);
                document.getElementById('userFullName').innerHTML = fullName;
                document.getElementById('age').innerHTML = age + " år";
                document.getElementById('email').innerHTML = data[i].email;
                document.getElementById('interest').innerHTML = "interest";
                document.getElementById('about').innerHTML = data[i].about;


            } 
        }
    });  
});

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
    var userOneId = localStorage.getItem("email");
    // var matchUser = document.getElementById("email").value;
    var userTwoId = "hello";


    // alert(matchUser)

    const newMatch = { userOneId, userTwoId }

    addVisit(userOneId, userTwoId);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    };

    fetch('http://localhost:5000/match', options);

    // location.reload();
}



function addVisit(email, matchUser){
    alert (matchUser)

    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visiting){
        var visits = visiting[0].visits;
        visits.push(matchUser)
        // visits.push();

        const newVisit = { email, visits };
        const options = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newVisit),
        }
    
        fetch(`http://localhost:5000/visits/${email}`, options)
    })
};