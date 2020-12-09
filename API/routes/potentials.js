// Importing express to user server calls
import express from "express";

// Importing the function from controller
import { getEmailPotentials } from '../controllers/potentials.js';

// Declaring the router
const router = express.Router();

// Get request with email as parameter 
router.get("/:email", getEmailPotentials);

// Exporting the router 
export default router;