
function correctLogin(){
    // Loading the email and password 
    var email = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;

    // Fetching the user with the given email
    fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {
        // Checking if email and password are a match to the fetched user
        if (data[0].email == email && data[0].password == loginPassword){
            // If correct rememberMe function is called and redirecting to matching site
            rememberMe(email, loginPassword);
            window.location.href = "../matches/matching.html";
        } else {
            // if wrong an error alerts the user
            alert("Forkert email eller kodeord")
        }
    });
}

function rememberMe(email, password){
    // Function that saves the email and password in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
