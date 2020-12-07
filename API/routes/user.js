//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";
import { getUser, postUser, getEmailUser, deleteUser, patchUser } from '../controllers/user.js';

const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
// router.get("/:id", getIdUser);
router.get("/:email", getEmailUser);
router.delete("/:email", deleteUser);
router.patch("/:email", patchUser);

export default router;
