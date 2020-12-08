
function alreadyLoggedIn(){
    var email = localStorage.getItem("email");

    if (email != null){
        window.location.href = "../matches/matching.html";
    } 
}




