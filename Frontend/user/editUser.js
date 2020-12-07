
function editUser(){
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");


    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var image = document.getElementById("image").value;
    var interest = document.getElementById("interest").value;
    var about = document.getElementById("about").value;

    // rememberMe(email, password);

    // var year, month, day = dateOfBirth.split("-");
    

    // var dateOfBirth = new Date(dateOfBirth);

    //need to create classes here, sinde we need to send it as one object

    // const user = new User (firstName, lastName, email, dateOfBirth, password);
    // const user = {};

    const editedUser = { firstName, lastName, email, dateOfBirth, password, about };
    const options = {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedUser),
    }

    // alert (editedUser)
    // will return{“userId”: 1,“id”: 1,“title”: “delectus aut autem”,“completed”: true}


    fetch(`http://localhost:5000/user/${email}`, options)
}