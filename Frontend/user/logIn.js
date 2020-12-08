// import { rememberMe } from "./logInStatus.js"


function correctLogin(){
    var email = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;

    

    fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {
        // alert(data[0])
        // alert(JSON.stringify(data[0].email))
        if (data[0].email == email && data[0].password == loginPassword){
            rememberMe(email, loginPassword);
            window.location.href = "../matches/matching.html";
        } else {
            alert("Forkert email eller kodeord")
            throw console.error("forkert email eller kodeord");
        }
    });
}

function rememberMe(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
