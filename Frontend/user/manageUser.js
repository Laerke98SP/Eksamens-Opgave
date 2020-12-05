
function newUser(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var image = document.getElementById("image").value;
    var interest = document.getElementById("interest").value;
    var about = document.getElementById("about").value;

    rememberMe(email, password);

    // var year, month, day = dateOfBirth.split("-");
    

    // var dateOfBirth = new Date(dateOfBirth);

    //need to create classes here, sinde we need to send it as one object

    // const user = new User (firstName, lastName, email, dateOfBirth, password);
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


function rememberMe(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
