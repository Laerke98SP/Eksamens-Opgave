//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";

import { getInterest, postInterest, getIdInterest, deleteInterest, patchInterest } from '../controllers/interest.js';

const router = express.Router();

router.get("/", getInterest);
router.post("/", postInterest);
router.get("/:id", getInterest);
router.delete("/:id", deleteInterest);
router.patch("/:id", patchInterest);

export default router;
