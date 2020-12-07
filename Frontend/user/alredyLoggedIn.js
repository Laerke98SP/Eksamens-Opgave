var email = localStorage.getItem("email");
var password = localStorage.getItem("password")


if (email == null){
    continue
} else {
    document.getElementById('email').defaultValue = email;
    document.getElementById('password').defaultValue = password;
}


