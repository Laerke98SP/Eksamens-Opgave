
function newUser(){
    // Function that gets called when button pressed

    // Information gathered from inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var about = document.getElementById("about").value;

    // Local storage set to remember the user
    rememberMe(email, password);
    userVisits(email)
    
    // Creating an object for easy transportation through the API
    const user = { firstName, lastName, email, dateOfBirth, password, about };

    // Creating the type of connection to the API. 
    // The request is POST and the user gets stringyfied and put into body
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    
    // Fetching the user endpoint with the created restrictions
    fetch('http://localhost:5000/user', options);
};


function userVisits(email){
    // Linking the email to current visits
    var visits = { email, visits: []}

    // Creating the type of connection to the API. 
    // The request is POST and the visit gets stringyfied and put into body
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visits)
    };
    
    // Fetching the visits endpoint with the created restrictions
    fetch('http://localhost:5000/visits', options);
}


function rememberMe(email, password){
    // Saving the email and password in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
