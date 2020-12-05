
var loginEmail = localStorage.getItem("email");
alert(loginEmail)

fetch(`http://localhost:5000/user/${loginEmail}`).then((resp) => resp.json()).then(function(data) {    
    var fullName = data[0].firstName + " " + data[0].lastName;
    var psw = data[0].password;
    var dob = data[0].dateOfBirth;
    var em = data[0].email;
    var ab = data[0].about;

    alert(data)



        // var age = calculateAge(data[0].dateOfBirth)

    // alert(data[0].password)

    document.getElementById('userFullName').innerHTML = fullName;
    document.getElementById('age').innerHTML = dob;
    document.getElementById('email').innerHTML = em;
    document.getElementById('interest').innerHTML = "interest";
    document.getElementById('about').innerHTML = ab;
})



function calculateAge(dob){
    //calculateAge is a function, since you would need their age to be accurate and not static
    var diff_ms = Date.now() - new Date(dob);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function forgetMe(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "../index.html";
}

