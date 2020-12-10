
function editUser(){
    // Getting the email and password from local storage
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    // Getting the new information from the changed user info
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var about = document.getElementById("about").value;

    // Creating a edited user object 
    const editedUser = { firstName, lastName, email, dateOfBirth, password, about };

    // Defining the request as patch and stringifying editedUser
    const options = {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedUser),
    }

    // Fetching the user endpoint with the email and options
    fetch(`http://localhost:5000/user/${email}`, options)
};

