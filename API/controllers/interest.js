//all actions related to a user

//importing the uuid so we can create id's
import { v4 as uuidv4 } from "uuid";

export const getInterest = (req, res) =>{
    res.send(interests); //should this even be used?
};

export const postInterest = (req, res) =>{
    const interest = req.body;

    const interestWithId = { ...interest, id: uuidv4()};  

    interests.push(interestWithId); //should be sent to storage

    res.send(`Interest with the id ${interest.id} added to the database!`);
};

export const getIdInterest = (req, res) =>{
    const { id } = req.params;

    const foundInterest = interests.find((interest) => interest.id == id) // shold storage be called to do this?

    res.send(foundInterest);
};

export const deleteInterest = (req, res) =>{
    const { id } = req.params;

    interests = interest.filter((interest) => interest.id != id);

    res.send(`interest with the id ${id} deleted from the database.`);
};


export const patchInterest = (req, res) =>{
    //should this be in storage?
    const { id } = req.params;

    const { interest } = req.body;

    const interest = interests.find((interest) => interest.id == id); 

    if (interest) user.interest = interest;

    res.send(`Interest with the id ${id} has been updated`);
};