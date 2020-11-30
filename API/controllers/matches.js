//all actions related to a user

//importing the uuid so we can create id's
import { v4 as uuidv4 } from "uuid";

export const getMatch = (req, res) =>{
    res.send(matches); //should this even be used?
};

export const postMatch = (req, res) =>{
    const match = req.body;

    const matchWithId = { ...match, id: uuidv4()};  

    matches.push(matchWithId); //should be sent to storage

    res.send(`Match with the id ${match.id} has been added to the database!`);
};

export const getIdMatch = (req, res) =>{
    const { id } = req.params;

    const foundMatch = matches.find((match) => match.id == id) // shold storage be called to do this?

    res.send(foundMatch);
};

export const deleteMatch = (req, res) =>{
    const { id } = req.params;

    matches = matches.filter((match) => match.id != id);

    res.send(`Match with the id ${id} deleted from the database.`);
};


export const patchMatch = (req, res) =>{
    //should this be in storage?
    //is this relevant for a match?
    const { id } = req.params;

    const { userOneId, userTwoId } = req.body;

    const match = matches.find((match) => match.id == id); 

    if (userOneId) user.userOneId = userOneId;
    if (userTwoId) user.userTwoId = userTwoId;

    res.send(`Match with the id ${id} has been updated`);
};