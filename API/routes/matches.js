//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";

import { getMatch, postMatch, getIdMatch, deleteMatch, patchMatch } from '../controllers/matches';

const router = express.Router();

router.get("/", getMatch);
router.post("/", postMatch);
router.get("/:id", getIdMatch);
router.delete("/:id", deleteMatch);
router.patch("/:id", patchMatch);

export default router;
