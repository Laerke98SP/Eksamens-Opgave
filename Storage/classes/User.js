
export class User{
    constructor( firstName, lastName, email, dateOfBirth, password, about ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.about = about;
    }

    calculateAge(){
        let [y, m, d] = this.dateOfBirth.split("-");
        let year = Number(y)
        let month = Number(m)
        let day = Number(d)
    
        // alert(new Date(dob))
    
        var diff_ms = Date.now() - new Date(year, month, day);
        var age_dt = new Date(diff_ms); 
        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    }
};


