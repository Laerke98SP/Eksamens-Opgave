
var email = localStorage.getItem("email");

fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {    
    var fullName = data[0].firstName + " " + data[0].lastName;
    var dob = data[0].dateOfBirth;
    var age = calculateAge(dob);

    document.getElementById('userFullName').innerHTML = fullName;
    document.getElementById('age').innerHTML = age + " år";
    document.getElementById('email').innerHTML = data[0].email;
    document.getElementById('about').innerHTML = data[0].about;
})



function calculateAge(dob){
    let [y, m, d] = dob.split("-");
    let year = Number(y)
    let month = Number(m)
    let day = Number(d)

    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function forgetMe(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "../index.html";
}

