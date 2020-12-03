
export class User{
    constructor(firstName, lastName, email, dateOfBirth, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }

    calculateAge(){
        //calculateAge is a function, since you would need their age to be accurate and not static
        var diff_ms = Date.now() - this.dateOfBirth.getTime();
        var age_dt = new Date(diff_ms); 
        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    }
};


