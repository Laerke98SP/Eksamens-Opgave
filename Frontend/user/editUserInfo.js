var email = localStorage.getItem("email");
// alert(loginEmail)

fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {
    var dob = data[0].dateOfBirth;
    
    document.getElementById('firstName').defaultValue = data[0].firstName;
    document.getElementById('lastName').defaultValue = data[0].lastName;

    document.getElementById('dateOfBirth').defaultValue = dob;
    // document.getElementById('email').innerHTML = data[0].email;

    document.getElementById('interest').innerHTML = "interest";
    document.getElementById('about').innerHTML = data[0].about;
})