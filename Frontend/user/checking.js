
export function alreadyUser(email){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email),
    };

    fetch('http://localhost:5000/user/email', options)
}