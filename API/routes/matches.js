// Importing express to user server calls
// Possible in this way, since i use the newest form of node.js
import express from "express";

// Impoting the functions from controllers to handle the CRUD requests
import { getMatch, postMatch, getEmailMatch, deleteMatch } from '../controllers/matches.js';

// Declaring a router
const router = express.Router();

// Requests calling the specific functions from controller
router.get("/", getMatch);
router.post("/", postMatch);

// Using email as identifier
router.get("/:email", getEmailMatch);

// Using id as an identifier 
router.delete("/:id", deleteMatch);

// Exporting the router
export default router;
