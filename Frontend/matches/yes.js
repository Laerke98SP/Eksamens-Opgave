function yes(){
    var email = localStorage.getItem("email");
    var matchUser = document.getElementById("email")

    const newMatch = {email, matchUser}

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    };

    fetch('http://localhost:5000/match', options);
}



function addVisit(email, matchUser){
    fetch(`http://localhost:5000/visits/${email}`).then((resp) => resp.json()).then(function(visits){
        var newVisits = [matchUser];
        newVisits.push(visits[0].visits);

        const newVisit = { email, newVisits };
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