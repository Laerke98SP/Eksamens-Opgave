import nedb from "nedb";
// import express from 'express';
import { Match } from "./classes/Match.js"

const db = new nedb({ filename: '../Storage/matchesDatabase.db', autoload: true});
db.loadDatabase();


export function insertingMatch(match){
    var newMatch = new Match( match.userOneId, match.userTwoId)
    db.insert(newMatch);
}

export function deletingMatch(id){ 
    db.remove({ _id: id }, {}, function (err, emailRemoved) { });
;}








