

function logOut(){
    // Logour function that removes the email and password from local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Redirects to index
    window.location.href = "../index.html";
}