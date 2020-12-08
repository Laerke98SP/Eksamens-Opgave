//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";

import { getMatch, postMatch, getEmailMatch, deleteMatch } from '../controllers/matches.js';

const router = express.Router();

router.get("/", getMatch);
router.post("/", postMatch);
router.get("/:email", getEmailMatch);
router.delete("/:id", deleteMatch);

export default router;
