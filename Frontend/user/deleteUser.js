
function deleteUser(){
    // Getting email from local storage
    var email = localStorage.getItem("email");

    // Creating the request method as delete
    const options = { 
        method: 'DELETE', 
        headers: { 
            'Content-type': 'application/json'
        }
    }

    // removing the email and password from the local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    
    // Fetching the delete request to the user endpoint with the specific email
    fetch(`http://localhost:5000/user/${email}`, options)
}