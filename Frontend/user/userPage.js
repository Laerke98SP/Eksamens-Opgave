// Getting the email from local storage
var email = localStorage.getItem("email");

// Fetching the user from the user endpoint while using the email retrieved from local storage
fetch(`http://localhost:5000/user/${email}`).then((resp) => resp.json()).then(function(data) { 
    // Changing the data to fit the format of the page
    var fullName = data[0].firstName + " " + data[0].lastName;
    var dob = data[0].dateOfBirth;

    // Calling a function to calculate age
    var age = calculateAge(dob);

    // Inserting the information 
    document.getElementById('userFullName').innerHTML = fullName;
    document.getElementById('age').innerHTML = age + " år";
    document.getElementById('email').innerHTML = data[0].email;
    document.getElementById('about').innerHTML = data[0].about;
});


function calculateAge(dob){
    // Splitting the string to get day, month and year information
    let [y, m, d] = dob.split("-");

    // Converting from string to number
    let year = Number(y)
    let month = Number(m)
    let day = Number(d)

    // Calculating the age and returning it
    var diff_ms = Date.now() - new Date(year, month, day);
    var age_dt = new Date(diff_ms); 
    return age = Math.abs(age_dt.getUTCFullYear() - 1970);
}


function forgetMe(){
    // Function for logging out 

    // Removing the email and password from local storage
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Redirecting to index
    window.location.href = "../index.html";
};

