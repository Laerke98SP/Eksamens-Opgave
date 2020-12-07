//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";
import { getUserVisits, postUserVisits, getEmailVisits, deleteUserVisits, patchVisits } from '../controllers/visits.js';

const router = express.Router();

router.get("/", getUserVisits);
router.post("/", postUserVisits);
// router.get("/:id", getIdUser);
router.get("/:email", getEmailVisits);
router.delete("/:email", deleteUserVisits);
router.patch("/:email", patchVisits);

export default router;
