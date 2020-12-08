
function newUser(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var about = document.getElementById("about").value;

    rememberMe(email, password);
    userVisits(email)
    
    const user = { firstName, lastName, email, dateOfBirth, password, about };

    // alert(user)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    

    fetch('http://localhost:5000/user', options);
};


function userVisits(email){
    var visits = { email, visits: []}


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visits)
    };
    

    fetch('http://localhost:5000/visits', options);
}


function rememberMe(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
