
function deleteUser(){
    var email = localStorage.getItem("email");

    // alert(email)

    // const editedUser = { firstName, lastName, email, dateOfBirth, password, about };
    const options = { 
        method: 'DELETE', 
        headers: { 
            'Content-type': 'application/json'
        }
    }

    localStorage.removeItem('email');
    localStorage.removeItem('password');
    
    fetch(`http://localhost:5000/user/${email}`, options)
}