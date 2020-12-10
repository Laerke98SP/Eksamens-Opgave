// Importing express to use server calls
import express from "express";

// Importing the function from controllers
import { getUser, postUser, getEmailUser, deleteUser, patchUser } from '../controllers/user.js';

// Declaring a router
const router = express.Router();

// All CRUD requests used for user
router.get("/", getUser);
router.post("/", postUser);

// Email set as parameter, to use as identifier 
router.get("/:email", getEmailUser);
router.delete("/:email", deleteUser);
router.patch("/:email", patchUser);

// ecporting the router 
export default router;
