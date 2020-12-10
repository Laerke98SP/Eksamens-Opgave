// Getting the email fron local storage
var email = localStorage.getItem("email");

fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {
    // Inserting the info already in storage
    document.getElementById('firstName').defaultValue = data[0].firstName;
    document.getElementById('lastName').defaultValue = data[0].lastName;
    document.getElementById('dateOfBirth').defaultValue = data[0].dateOfBirth;
    document.getElementById('about').innerHTML = data[0].about;
})