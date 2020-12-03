// import User from "../classes/User.js";
// var User = require('../classes/User.js');

// function cleanInterest(interest){
//     var 
// }


function newUser(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dateOfBirth = document.getElementById("dob").value;
    var image = document.getElementById("image").value;
    var interest = document.getElementById("interest").value;
    var aboutUser = document.getElementById("aboutUser").value;

    //need to create classes here, sinde we need to send it as one object

    // const user = new User (firstName, lastName, email, dateOfBirth, password);
    const user = {firstName, lastName, email, dateOfBirth, password};


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        // body: JSON.stringify
    };

    // "user/newUser.html"
    fetch('http://localhost:5000/user', options);

    // https://www.youtube.com/watch?v=tc8DU14qX6I
};


