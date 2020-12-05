
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
        body: JSON.stringify(user)
    };
    

    fetch('http://localhost:5000/user', options)

};
