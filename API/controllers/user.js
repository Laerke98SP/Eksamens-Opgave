import { insertingUser, gettingUser, findingIdUser, deletingUser, patchingUser } from "../../Storage/userData.js"
import fs from 'fs';

// export const getHomePage = (req, res) => {  // Hver gang denne path med http verb bliver kaldt, så vil vi starte en fubnktion med 2 parametrer, req & res
//         fs.readFile(__dirname + '/client/Login.html', 'utf8', function(err, text){
//              res.send(text);
//          });


export const getUser = (req, res) =>{
    console.log(gettingUser())
    res.send("something happened");
};

export const postUser = (req, res) =>{
    const user = req.body;
    insertingUser(user);
    // return req.redirect("./matches.js");
    // fs.readFile('../Frontend/user/userPage.html', 'utf8', function(err, text){
    //     res.send(text);
    // });

    return res.redirect('/page')


    // res.send('User has been added to the database');
};

export const getIdUser = (req, res) =>{
    const { id } = req.params;
    findingIdUser(id);
    res.send('User has been found');
};

export const deleteUser = (req, res) =>{
    const { id } = req.params;
    deletingUser(id);
    res.send(`User has been deleted`);
};

export const patchUser = (req, res) =>{
    const { id } = req.params;
    const { firstName, lastName, dateOfBirth } = req.body;
    patchingUser(id, firstName, lastName, dateOfBirth);
    res.send('User has been updated');
};

