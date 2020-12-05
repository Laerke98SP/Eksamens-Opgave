// Sætter "item, til at være værdien af input fra useren og bruger dem senere"

function rememberMe(){
    localStorage.setItem('email', usernameInput.value);
    localStorage.setItem('password', passCodeInput.value);
}


function forgetMe(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}





// loginBtn.addEventListener('click', function(){
//     // let newUser = new User(username, password);
//    // uploadUser(newUser);
//     localStorage.setItem('email', usernameInput.value);
//     localStorage.setItem('password', passCodeInput.value);
//     // nameDisplayCheck() //køre denne funktion hver gang knappen trykkes på

// });

// // -------------- Hva der skal slettes ved logout.-----------
// logoutBtn.addEventListener('click', function(){
//     localStorage.removeItem('email');
//     localStorage.removeItem('password');
//     // nameDisplayCheck() //køre denne funktion hver gang knappen trykkes på
// })