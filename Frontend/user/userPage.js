
var email = localStorage.getItem("email");
// alert(loginEmail)

fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) {    
    var fullName = data[0].firstName + " " + data[0].lastName;
    //dateOfBirth change to age
    var dob = data[0].dateOfBirth;
    // alert(dob)
    var age = calculateAge(dob);

    
    document.getElementById('userFullName').innerHTML = fullName;
    document.getElementById('age').innerHTML = age + " år";
    document.getElementById('email').innerHTML = data[0].email;
    document.getElementById('interest').innerHTML = "interest";
    document.getElementById('about').innerHTML = data[0].about;
})



function calculateAge(dob){
    //calculateAge is a function, since you would need their age to be accurate and not static
    // var ymd = str.split("-");
    // var year = ymd[0];
    // var month = ymd[1];
    // var day = ymd[2];

    let [y, m, d] = dob.split("-");
    let year = Number(y)
    let month = Number(m)
    let day = Number(d)

    // alert(new Date(dob))

    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function forgetMe(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "../index.html";
}

