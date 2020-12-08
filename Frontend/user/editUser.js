
function editUser(){
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var about = document.getElementById("about").value;

    const editedUser = { firstName, lastName, email, dateOfBirth, password, about };
    const options = {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedUser),
    }

    fetch(`http://localhost:5000/user/${email}`, options)
};

