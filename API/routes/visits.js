// Importing express to use server calls
import express from "express";

// Importing the functions from controllers
import { getUserVisits, postUserVisits, getEmailVisits, patchVisits } from '../controllers/visits.js';

// Declaring a router
const router = express.Router();

// Some CRUD requests
router.get("/", getUserVisits);
router.post("/", postUserVisits);

// Email used as parameter and identifier 
router.get("/:email", getEmailVisits);
router.patch("/:email", patchVisits);

// Exporting the router 
export default router;
