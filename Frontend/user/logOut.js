function logOut(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "../index.html";
}