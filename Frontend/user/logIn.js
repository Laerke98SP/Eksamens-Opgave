// import { rememberMe } from "./logInStatus.js"


function correctLogin(){
    var loginEmail = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;

    fetch(`http://localhost:5000/user/${loginEmail}`).then((resp) => resp.json()).then(function(data) {
        // alert(JSON.stringify(data[0].email))
        if (data[0].email == loginEmail && data[0].password == loginPassword){
            window.location.href = "userPage.html";
            rememberMe(loginEmail, loginPassword);
        }
    })
}

function rememberMe(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}
