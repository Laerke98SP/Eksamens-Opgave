//all actions related to a user

//importing the uuid so we can create id's
import { v4 as uuidv4 } from "uuid";
  //we want to load the data for easy access?
  //we want to send the changes back to storage
  //should the whole storage be checked? 

const users = []

export const getUser = (req, res) =>{
    res.send(users); //should this even be used?
};
 


export const postUser = (req, res) =>{
    const user = req.body;

    const userWithId = { ...user, id: uuidv4()};  

    users.insert(userWithId); //should be sent to storage, how to do that?
    // res.send(userWithId);
    
    res.send(`User with the username ${user.firstName} added to the database!`);

};

export const getIdUser = (req, res) =>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id) // shold storage be called to do this?

    res.send(foundUser);
};

export const deleteUser = (req, res) =>{
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);
};


export const patchUser = (req, res) =>{
    //should this be in storage?
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id); 

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};

module.exports(users);