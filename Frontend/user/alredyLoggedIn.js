
function alreadyLoggedIn(){
    // Getting the email from local storage
    var email = localStorage.getItem("email");

    // Checking if there exist an email 
    if (email != null){
        // If an email exist, redirect to matcing
        window.location.href = "../matches/matching.html";
    } 
}




